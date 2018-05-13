import React from 'react';
import { withStyles } from 'material-ui/styles';
import titleInitials from '../utils/title-initial';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import classnames from 'classnames';

const styles = theme => ({
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageWrapperFromMe:{
    justifyContent: 'flex-end',
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#f4e79b',
  },
});

class Message extends React.Component {
 render () {
  const {classes, sender, content} = this.props;
    const isMessageFromMe = sender ==='me';
    const userAvatar = (
      <Avatar>
        {titleInitials(sender)}
      </Avatar>
    );

      return (
        <div className={classnames(
          classes.messageWrapper,
          isMessageFromMe && classes.messageWrapperFromMe
        )}>
        {!isMessageFromMe && userAvatar}
        <Paper className={classnames(
          classes.message,
          isMessageFromMe && classes.messageFromMe
        )}>
          <Typography variant="caption">
          {sender}
          </Typography>
          <Typography variant="body1">
          {content}
          </Typography>
        </Paper>
        {isMessageFromMe && userAvatar}
      </div>
)}
};
export default withStyles(styles)(Message);
