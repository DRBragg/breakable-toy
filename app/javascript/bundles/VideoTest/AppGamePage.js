import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewGame from './components/NewGame';

const AppGamePage = () => (
  <MuiThemeProvider>
    <NewGame />
  </MuiThemeProvider>
);

export default AppGamePage;
