import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';
import SearchChats from './SearchChats';
import ChatList from './ChatList';
import NewChat from './NewChat';

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
    <BottomNavigation showLabels>
      <BottomNavigationAction label ="MyChats" icon={<RestoreIcon />} />
      <BottomNavigationAction label ="Explore" icon={<ExploreIcon />} />
    </BottomNavigation>
  </Drawer>
);

export default withStyles (styles) (SideBar);
