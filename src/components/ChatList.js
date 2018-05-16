import React from 'react';
import { withStyles } from 'material-ui/styles';
// import Avatar from './Avatar';
import ChatListItem from './ChatListItem';
import List  from 'material-ui/List';


const styles = theme => ({
  chatList: {
  height: 'calc(100% - 56px)',
  overflowY: 'scroll',
   },
});

const ChatList = ({ chats, classes }) => (
<List className={classes.chatList}>
   {chats && chats.map((chat, index) => (
     <ChatListItem key ={index} {...chat} />
    ))}
</List>
);

export default withStyles (styles) (ChatList);
