import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from './Appbar';

const App = () => (
  <MuiThemeProvider>
    <Appbar />
  </MuiThemeProvider>
);

export default App;
