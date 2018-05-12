import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Input from 'material-ui/Input';
import titleInitials from '../utils/title-initial';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  },
  messagesWrapper: {

    overflow: 'hidden',
    // overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 320px)`, 
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrapperFromMe:{
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#f4e79b',
  },
});

class Chat extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }
  
  render () {
    const { classes, messages } = this.props;

    return (
      <main className={classes.chatLayout}>
        <div className={classes.messagesWrapper} ref="messagesWrapper">
             {messages && messages.map((message, index) => {
               const isMessageFromMe = message.sender ==='me';

               const userAvatar = (
                 <Avatar>
                   {titleInitials(message.sender)}
                  </Avatar>
               );

               return (
                 <div key={index} className={classnames(
                   classes.messageWrapper,
                   isMessageFromMe && classes.messageWrapperFromMe
                 )}>
                  {!isMessageFromMe && userAvatar}
                  <Paper className={classnames(
                    classes.message,
                    isMessageFromMe && classes.messageFromMe
                  )}>
                    <Typography variant="caption">
                    {message.sender}
                    </Typography>
                    <Typography variant="body1">
                    {message.content}
                    </Typography>
                  </Paper>
                  {isMessageFromMe && userAvatar}
                </div>
               );
             })}
        </div>
            
        <div className={classes.messageInputWrapper}>
             <Paper className={classes.messageInput} elevation={6}>
              <Input fullWidth placeholder="Type your message..."/>
             </Paper>
        </div>
      </main>
    );
  }
}
export default withStyles(styles)(Chat);
