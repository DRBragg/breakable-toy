import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GamesPage from './components/GamesPage';
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
  }
};

const muiTheme = getMuiTheme(baseTheme, overwrites);

const AppGamesPage = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <GamesPage games={props.games}/>
  </MuiThemeProvider>
);

export default AppGamesPage;
