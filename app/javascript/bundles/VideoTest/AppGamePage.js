import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewGame from './components/NewGame';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const overwrites = {
  "palette": {
      "primary1Color": Colors.blue800,
      "primary2Color": Colors.blue700,
      "accent1Color": '#ff9e08',
      "accent2Color": Colors.amber500,
      "accent3Color": Colors.amber200
  },
  "appBar": {
      "textColor": Colors.white
  },
  "stepper": {
        "textColor": Colors.white,
        "disabledTextColor": fade(Colors.white, 0.22)
  },
  "raisedButton": {
        "primaryTextColor": Colors.white,
        "secondaryTextColor": Colors.white
  }
};

const muiTheme = getMuiTheme(baseTheme, overwrites);

const AppGamePage = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <NewGame deck={props.deck}/>
  </MuiThemeProvider>
);

export default AppGamePage;
