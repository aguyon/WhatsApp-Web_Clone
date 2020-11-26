import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import moment from 'moment';
import 'moment/locale/fr';

import { Chat, Message, MessageType } from '../../api/models';
import { MessagesCollection } from '../../api/messages';

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
  selectedChat: Chat;
}

const MessageView = (props: MessageViewProps): JSX.Element => {
  const [fabsVisible, setFabsVisible] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = React.useState('');

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

  const handleSendMessage = (content: string): void => {
    const message: Message = {
      chatId: props.selectedChat._id,
      content,
      createdAt: moment().toDate(),
      senderId: Meteor.userId(),
      type: MessageType.TEXT,
      read: false,
    };

    Meteor.call('message.insert', message, (err, res) => {
      if (err) console.log('error insert message');
      else console.log('res', res);
    });
  };

  const handleInputClick = (): void => {
    const input = document.getElementById('fileUpload') as HTMLInputElement;
    input.click();
  };

  let fileInput: any;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    fileInput = event.target.files[0];

    if (fileInput) {
      setModalVisible(true);
      const fileReader: FileReader = new FileReader();
      fileReader.onload = function (e) {
        setSelectedImage(e.target.result);
      };
      fileReader.readAsDataURL(fileInput);
    }
  };

  return (
    <StyledMessageView>
      <Header iconClass="greyIcon" icons={icons}>
        <Avatar avatar_url={props.selectedChat.picture} />
        <div className="headerMsg--container">
          <span className="headerMsg--title">{props.selectedChat.title}</span>
          <span className="headerMsg--subtitle">en ligne</span>
        </div>
      </Header>
      {modalVisible ? (
        <Modal selectedImage={selectedImage} onClose={handleCloseModal} />
      ) : (
        <React.Fragment>
          <MessageBox
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
