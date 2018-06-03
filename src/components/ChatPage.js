import React from 'react';
// import { withStyles } from 'material-ui/styles';
import SideBar from './SideBar';
import ChatHeader from './ChatHeader';
import Chat from './Chat';
// import { messages } from '../mock-data';

// const styles = theme => ({
//   root: {
//     position: 'relative',
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     backgroundColor: theme.palette.background.default,
//   },
// });

class ChatPage extends React.Component {
  componentDidMount() {
    const { match, fetchAllChats, fetchMyChats, setActiveChat } = this.props;
    
    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ])
      .then(() => {
        if (match.params.chatId) {
          setActiveChat(match.params.chatId);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const { match: {params }, setActiveChat } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
    }
  }

  render() {
    const { 
      // classes, 
      chats, logout, activeUser,
      createChat, joinChat, leaveChat, deleteChat,
      sendMessage, messages, editUser
    } = this.props;

    return (
      <React.Fragment>
        <ChatHeader 
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          logout={logout}
          editUser={editUser}
        />
        <SideBar 
          chats={chats}
          createChat={createChat}
        />
        {console.log('Chat .activeUser = ', activeUser)}
        <Chat 
          messages={messages} 
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
      </React.Fragment>
  ); 
 }
}

export default ChatPage;

