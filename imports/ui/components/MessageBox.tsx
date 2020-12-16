import React from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/fr';
import FlipMove from 'react-flip-move';

import { Chat, Message } from '../../api/models';
import { updateBadges } from '../../api/helpers';

import StyledMessageBox from '../elements/StyledMessageBox';
import Day from './Day';
import MessageText from './MessageText';
import FABs from './FABs';
import MessageImage from './MessageImage';

interface MessageBoxProps {
  onMessageClick: (messageId: string, type: string) => void;
  selectedChat: Chat;
  messages: Message[];
  // fabsVisible: boolean;
  // onFABItemClick: () => void;
  // onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MessageBox = (props: MessageBoxProps): JSX.Element => {
  let isEven: boolean = false;
  const format: string = 'D MMMM Y';
  let messagesEnd: HTMLDivElement;
  const theme = localStorage.getItem('theme');

  React.useEffect(() => {
    scrollToBottom();

    updateBadges(props.selectedChat.participants, props.selectedChat._id);
  }, [props.selectedChat, props.messages]);

  props.messages.forEach((message: Message) => {
    if (!message.senderId) {
      message.ownership = !!message.ownership === isEven ? 'mine' : 'other';
      isEven = !isEven;
      return message;
    } else {
      message.ownership = message.senderId === Meteor.userId() ? 'mine' : 'other';
      return message;
    }
  });

  const groupedMessages: any = _.groupBy(props.messages, (message: Message) => {
    return moment(message.createdAt).format(format);
  });

  const newMessages: any = Object.keys(groupedMessages).map((key) => {
    return {
      date: key,
      groupedMessages: groupedMessages[key],
      today: moment().format(format) === key,
    };
  });

  const renderMessages = (message: any): JSX.Element[] => {
    return message.groupedMessages.map(
      (message: {
        _id: string;
        content: string;
        type: string;
        ownership: string;
        createdAt: string;
      }) => {
        const msgClass: string = `message message--${message.ownership}`;
        if (message.type === 'image') {
          const mine: boolean = message.ownership === 'mine';
          return (
            <React.Fragment key={message._id}>
              <MessageImage
                mine={mine}
                content={message.content}
                createdAt={message.createdAt}
                onImageClick={() => props.onMessageClick(message._id, 'image')}
              />
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={message._id}>
            <MessageText
              id={message._id}
              onMessageClick={props.onMessageClick}
              key={message._id}
              msgClass={msgClass}
              content={message.content}
              ownership={message.ownership}
              createdAt={message.createdAt}
            />
          </React.Fragment>
        );
      }
    );
  };

  const renderContent = (): JSX.Element[] => {
    const formatDate = (message: { date: string; today: boolean }) => {
      const sub1Day: string = moment().subtract(1, 'days').format(format);
      const sub2Day: string = moment().subtract(2, 'days').format(format);

      if (message.today) return `Aujourd'hui`;
      if (message.date === sub1Day) return 'Hier';
      if (message.date === sub2Day) return moment().subtract(2, 'days').format('dddd');
      else return message.date;
    };

    return newMessages.map((message: any, index: number) => (
      <div key={index}>
        <Day date={formatDate(message)} />
        {renderMessages(message)}
      </div>
    ));
  };

  const scrollToBottom = (): void => {
    messagesEnd.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledMessageBox themeStorage={theme}>
      {/* <FABs
        fabsVisible={props.fabsVisible}
        onFABItemClick={props.onFABItemClick}
        onInputChange={props.onInputChange}
      /> */}
      <FlipMove style={{ zIndex: 150 }}>{renderContent()}</FlipMove>
      <div ref={(el: HTMLDivElement) => (messagesEnd = el)} />
      <div className={theme === 'light' ? '' : 'message--overlay'} />
    </StyledMessageBox>
  );
};

export default MessageBox;
