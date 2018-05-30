import React from 'react';
import { withStyles } from 'material-ui/styles';
import SideBar from './SideBar';
import ChatHeader from './ChatHeader';
import Chat from './Chat';
import { messages } from '../mock-data';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

class ChatPage extends React.Component {
  componentDidMount() {
    const { fetchAllChats, fetchMyChats } = this.props;
    
    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ]);
  }

  render() {
    const { classes, chats } = this.props;

    return(
  <div className={classes.root}>
   <SideBar chats={chats} />
   <ChatHeader />
   <Chat messages={messages} />
  </div>
  ); 
 }
};

export default withStyles(styles)(ChatPage);

