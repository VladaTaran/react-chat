import React from 'react';
import { withStyles } from 'material-ui/styles';
// import titleInitials from '../utils/title-initial';
// import Paper from 'material-ui/Paper';
// import classnames from 'classnames';
// import Typography from 'material-ui/Typography';
// import Avatar from 'material-ui/Avatar';
import Message from './Message';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  // messageWrapper: {
  //   display: 'flex',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  // },
  // messageWrapperFromMe:{
  //   justifyContent: 'flex-end',
  // },
  // messageFromMe: {
  //   marginRight: theme.spacing.unit * 2,
  //   backgroundColor: '#f4e79b',
  // },
  // message: {
  //   maxWidth: '70%',
  //   minWidth: '10%',
  //   padding: theme.spacing.unit,
  //   marginLeft: theme.spacing.unit * 2,
  // },
});

class MessageList extends React.Component {
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

    return(
  <div className={classes.messagesWrapper} ref="messagesWrapper">
    {messages && messages.map((message, index) => (
            <Message key={index} {...message} />
    ))
  }
  </div>
);
}
}

export default withStyles(styles)(MessageList);
