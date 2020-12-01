import React from 'react';

import { NotesProvider } from './notes';

const AppProvider: React.FC = ({ children }) => (
  <NotesProvider>{children}</NotesProvider>
);

export default AppProvider;
