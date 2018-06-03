import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  },
});

const Chat = ({ classes, messages, activeChat, activeUser, joinChat, sendMessage }) => (
  <main className={classes.chatLayout}>
    <MessageList
      messages={messages}
      activeUser={activeUser}
    />
    {console.log("activeChat", activeChat)}
    {activeChat && <MessageInput
      sendMessage={(content) => sendMessage(activeChat._id, content)}
      showJoinButton={!activeUser.isChatMember}
      onJoinButtonClick={() => joinChat(activeChat._id)}
      activeUser={activeUser}
    />}
  </main>
);
// class Chat extends React.Component {  
//   render () {
//     const { classes, messages } = this.props;

//     return (
//       <main className={classes.chatLayout}>
//         <MessageList messages={messages} />
//         <MessageInput />
//       </main>
//     );
//   }
// }
export default withRouter(withStyles(styles)(Chat));
