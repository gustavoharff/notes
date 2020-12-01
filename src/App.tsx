import React from 'react';
import reactDOM from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';

import Dashboard from './pages/Dashboard';

import AppProvider from './hooks';

const App = () => (
  <AppProvider>
    <GlobalStyle />
    <Dashboard />
  </AppProvider>
);

reactDOM.render(<App />, document.getElementById('root'));
