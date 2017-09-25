import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IndexPage from './components/IndexPage';

const AppIndexPage = () => (
  <MuiThemeProvider>
    <IndexPage />
  </MuiThemeProvider>
);

export default AppIndexPage;
