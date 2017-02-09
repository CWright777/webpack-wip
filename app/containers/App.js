import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default ({children, ...props}) => (
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>
);

