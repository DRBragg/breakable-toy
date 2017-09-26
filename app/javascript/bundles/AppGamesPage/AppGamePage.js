import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GamesPage from './components/GamesPage';

const AppGamesPage = () => (
  <MuiThemeProvider>
    <GamesPage />
  </MuiThemeProvider>
);

export default AppGamesPage;
