import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function FolderList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <Avatar>
          </Avatar>
          <ListItemText primary="Chat 1" secondary="days ago" />
        </ListItem>
        <ListItem>
          <Avatar>
          </Avatar>
          <ListItemText primary="Chat 2" secondary="days ago " />
        </ListItem>
        <ListItem>
          <Avatar>
          </Avatar>
          <ListItemText primary="Chat 3" secondary="days ago" />
        </ListItem>
      </List>
    </div>
  );
}


export default withStyles(styles)(FolderList);
