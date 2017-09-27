import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IndexPage from './components/IndexPage';

const AppIndexPage = (props) => (
  <MuiThemeProvider>
    <IndexPage games={props.games}/>
  </MuiThemeProvider>
);

export default AppIndexPage;
