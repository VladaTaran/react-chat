import React from 'react';
import { withStyles } from 'material-ui/styles';
import SideBar from './components/SideBar';
import { chats, messages } from './mock-data';
import ChatHeader from './components/ChatHeader';
import Chat from './components/Chat';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

class App extends React.Component {  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <SideBar chats={chats} />
        <ChatHeader />
        <Chat messages={messages} />
      </div>
    );
  }
}
 

export default withStyles(styles)(App);
