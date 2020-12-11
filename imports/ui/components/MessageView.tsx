import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import moment from 'moment';
import 'moment/locale/fr';

import { Chat, Message, MessageType } from '../../api/models';
import { MessagesCollection } from '../../api/messages';
import { findOtherId, uploadFile } from '../../api/helpers';

import StyledMessageView from '../elements/StyledMessageView';

import Header from '../components/Header';
import Avatar from '../components/Avatar';
import MessageBox from './MessageBox';
import Footer from './Footer';
import Modal from './Modal';

interface MessageViewProps {
  // props withTracker
  message: Message[];

  // Props MainRight
  onMessageClick: (messageId: string, type: string) => void;
  selectedChat: Chat;
  onAvatarClick: (otherId: string) => void;
}

const MessageView = (props: MessageViewProps): JSX.Element => {
  const [fabsVisible, setFabsVisible] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = React.useState<any>('');

  const icons: { icon: string; onClick?: () => void }[] = [
    { icon: 'search' },
    { icon: 'paperclip', onClick: () => handlePaperClip() },
    { icon: 'ellipsis-v' },
  ];

  const handlePaperClip = (): void => {
    setFabsVisible(!fabsVisible);
  };

  const handleCloseModal = (): void => {
    setModalVisible(false);
    setFabsVisible(false);
  };

  const handleInputClick = (): void => {
    const input = document.getElementById('fileUpload') as HTMLInputElement;
    input.click();
  };

  let fileInput = React.useRef<File>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    fileInput.current = event.target.files[0];

    if (fileInput) {
      setModalVisible(true);
      const fileReader: FileReader = new FileReader();
      fileReader.onload = function (e) {
        setSelectedImage(e.target.result);
      };
      fileReader.readAsDataURL(fileInput.current);
    }
  };

  const handleSendMessage = (content: string, type: MessageType): void => {
    const message: Message = {
      chatId: props.selectedChat._id,
      content,
      createdAt: moment().toDate(),
      senderId: Meteor.userId(),
      type,
      read: false,
    };

    if (modalVisible) handleCloseModal();

    Meteor.call('message.insert', message, (err: Error, id: string) => {
      if (err) console.log('error insert message');
      else {
        // console.log('res', id);
        console.log('before', fileInput);
        uploadFile(fileInput.current, true);

        // fileInput.current = null;

        Tracker.autorun(() => {
          const imageUrl = Session.get('wc--imageUrl');

          if (imageUrl && message.type === 'image') {
            Meteor.call('message.update', id, imageUrl, (err: Error, res: any) => {
              if (err) console.log('error update message', err);
              else console.log('res', res);
            });
          }
        });
      }
    });
    // fileInput = null;
  };

  const avatarClick = (): void => {
    const otherId: string = findOtherId(props.selectedChat.participants);
    props.onAvatarClick(otherId);
  };

  return (
    <StyledMessageView>
      <Header icons={icons}>
        <Avatar avatar_url={props.selectedChat.picture} onAvatarClick={avatarClick} />
        <div className="headerMsg--container">
          <span className="headerMsg--title">{props.selectedChat.title}</span>
          <span className="headerMsg--subtitle">en ligne</span>
        </div>
      </Header>
      {modalVisible ? (
        <Modal
          selectedImage={selectedImage}
          onClose={handleCloseModal}
          onUpload={handleSendMessage}
        />
      ) : (
        <React.Fragment>
          <MessageBox
            onMessageClick={props.onMessageClick}
            selectedChat={props.selectedChat}
            messages={props.message}
            fabsVisible={fabsVisible}
            onFABItemClick={handleInputClick}
            onInputChange={handleInputChange}
          />
          <Footer onSend={handleSendMessage} />
        </React.Fragment>
      )}
    </StyledMessageView>
  );
};

export default withTracker(({ selectedChat }) => {
  return {
    message: MessagesCollection.find({ chatId: selectedChat._id }).fetch(),
  };
})(MessageView);
