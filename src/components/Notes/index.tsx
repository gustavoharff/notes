import React from 'react';

import { useNotes } from '../../hooks/notes';

import { Container, Note, Texts } from './styles';

const Notes: React.FC = () => {
  const { notes } = useNotes();

  return (
    <Container>
      {notes.map(note => (
        <Note key={note.id}>
          <Texts>
            <strong>{note.title}</strong>
            <span>{note.content}</span>
          </Texts>
        </Note>
      ))}
    </Container>
  );
};

export default Notes;
