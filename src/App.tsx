import React from 'react';
import reactDOM from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';

import Dashboard from './pages/Dashboard';

import { NotesProvider } from './hooks/notes';

const App = () => {
  return (
    <NotesProvider>
      <GlobalStyle />
      <Dashboard />
    </NotesProvider>
  );
};

reactDOM.render(<App />, document.getElementById('root'));
