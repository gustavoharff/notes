import React from 'react';

import { NotesProvider } from './notes';

const AppProvider: React.FC = ({ children }) => {
  return (
    <NotesProvider>
      {children}
    </NotesProvider>
  );
};

export default AppProvider;
