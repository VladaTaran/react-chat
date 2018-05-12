import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import List, {ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';

import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';
import AddIcon from 'material-ui-icons/Add';

import titleInitials from '../utils/title-initial';
import Avatar from 'material-ui/Avatar';

const Styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  chatList: {
   height: 'calc(100% - 56px)',
   overflowY: 'scroll',
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  },  
});

const SideBar = ({ classes, chats }) => (
  <Drawer
    variant="permanent"
    // classes = {{ 
    //   paper: classes.drawerPaper,
    // }}
    className={classes.drawerPaper}
  >
    <div className={classes.drawerHeader}>
      <TextField
        fullWidth
        margin="normal"
        placeholder="Search chats..."
      />
    </div>
    <Divider />
    <List className={classes.chatList}>
    {chats.map((chat, index) => (
      <ListItem key ={index} button>
        <Avatar>{titleInitials(chat.title)}</Avatar>
        <ListItemText primary={chat.title}/>
      </ListItem>
    ))}
    </List>
    <Button
      variant="fab"
      color="primary"
      className={classes.newChatButton}
    >
      <AddIcon />
    </Button>
    <BottomNavigation showLabels>
      <BottomNavigationAction label ="MyChats" icon={<RestoreIcon />} />
      <BottomNavigationAction label ="Explore" icon={<ExploreIcon />} />
    </BottomNavigation>
  </Drawer>
);

export default withStyles (Styles) (SideBar);
