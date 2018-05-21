import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';

const styles = {};

class SimpleBottomNavigation extends React.Component {
  render() {
    return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label ="MyChats" icon={<RestoreIcon />} />
      <BottomNavigationAction label ="Explore" icon={<ExploreIcon />} />
    </BottomNavigation>
    );
  }
}

export default withStyles(styles)(SimpleBottomNavigation);
