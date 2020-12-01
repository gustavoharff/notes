import React, { createContext, useContext, useState } from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
}

interface NotesContextData {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesContext = createContext<NotesContextData>({} as NotesContextData);

const NotesProvider: React.FC = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([
    { id: '123', title: 'Example', content: 'Example' },
  ]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

function useNotes(): NotesContextData {
  const context = useContext(NotesContext);

  return context;
}

export { NotesProvider, useNotes };
