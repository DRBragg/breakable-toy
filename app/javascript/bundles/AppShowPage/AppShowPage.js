import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserGameCard from './components/UserGameCard';

const AppShowPage = (props) => (
  <MuiThemeProvider>
    <UserGameCard game={props.game} user={props.user} deck={props.deck} comments={props.comments}/>
  </MuiThemeProvider>
);

export default AppShowPage;
