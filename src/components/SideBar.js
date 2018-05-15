import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import SearchChats from './SearchChats';
import ChatList from './ChatList';
import NewChat from './NewChat';
import SimpleBottomNavigation from './SimpleBottomNavigation'

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
});

const SideBar = ({ classes, chats }) => (
  <Drawer
    variant="permanent"
    classes = {{ 
      paper: classes.drawerPaper,
    }}
  >
    <SearchChats />
    <Divider />
    <ChatList chats={chats}/>
    <NewChat /> 
    {
      <SimpleBottomNavigation/>
    }
  </Drawer>
);

export default withStyles (styles) (SideBar);
