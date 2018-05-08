import React from 'react';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import purple from 'material-ui/colors/purple';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
});


function MessageInputs(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <FormControl className={classes.margin}>
        <InputLabel
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
          htmlFor="custom-css-input"
        >
          Type your message
        </InputLabel>
        <Input
          classes={{
            underline: classes.cssUnderline,
          }}
          id="custom-css-input"
        />
      </FormControl>
    </div>
  );
}

export default withStyles(styles)(MessageInputs);
