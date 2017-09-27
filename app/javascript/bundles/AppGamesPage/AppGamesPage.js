import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GamesPage from './components/GamesPage';

const AppGamesPage = (props) => (
  <MuiThemeProvider>
    <GamesPage games={props.games}/>
  </MuiThemeProvider>
);

export default AppGamesPage;
