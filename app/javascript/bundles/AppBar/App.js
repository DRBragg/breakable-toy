import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from './Appbar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const overwrites = {
  "palette": {
      "primary1Color": Colors.blue800,
      "primary2Color": Colors.blue700,
      "accent1Color": Colors.amberA700,
      "accent2Color": Colors.amber500,
      "accent3Color": Colors.amber200
  },
  "appBar": {
      "textColor": Colors.white
  }
};

const muiTheme = getMuiTheme(baseTheme, overwrites);

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Appbar />
  </MuiThemeProvider>
);

export default App;
