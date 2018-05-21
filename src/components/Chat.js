import React from 'react';
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

class Chat extends React.Component {  
  render () {
    const { classes, messages } = this.props;

    return (
      <main className={classes.chatLayout}>
        <MessageList messages={messages} />
        <MessageInput />
      </main>
    );
  }
}
export default withStyles(styles)(Chat);
