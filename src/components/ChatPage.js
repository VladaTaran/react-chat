import React from 'react';
import { withStyles } from 'material-ui/styles';
import SideBar from './SideBar';
import { chats, messages } from '../mock-data';
import ChatHeader from './ChatHeader';
import Chat from './Chat';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const ChatPage = ({ classes }) => (
  <div className={classes.root}>
   <SideBar chats={chats} />
   <ChatHeader />
   <Chat messages={messages} />
  </div>
);

export default withStyles(styles)(ChatPage);
