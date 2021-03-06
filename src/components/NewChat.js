import React from 'react';
import { withStyles } from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';

const styles = theme => ({
 newChatButton: {
 position: 'absolute',
 left: 'auto',
 right: theme.spacing.unit * 3,
 bottom: theme.spacing.unit * 3 + 48,
  },  
});

const NewChat = ({ classes }) => (
  <Button
  variant="fab"
  color="primary"
  className={classes.newChatButton}
>
  <AddIcon />
</Button>
);

export default withStyles (styles) (NewChat);
