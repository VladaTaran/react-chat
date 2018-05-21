import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, {ListItem, ListItemText } from 'material-ui/List';
import titleInitials from '../utils/title-initial';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  chatList: {
  height: 'calc(100% - 56px)',
  overflowY: 'scroll',
   },
});

const ChatList = ({ chats, classes }) => (
<List className={classes.chatList}>
   {chats.map((chat, index) => (
     <ListItem key ={index} button>
       <Avatar>{titleInitials(chat.title)}</Avatar>
       <ListItemText primary={chat.title}/>
      </ListItem>
    ))}
</List>
);

export default withStyles (styles) (ChatList);
