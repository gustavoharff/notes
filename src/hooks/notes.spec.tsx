import { renderHook } from '@testing-library/react-hooks';

import { NotesProvider, useNotes } from './notes';

describe('Notes hook', () => {
  it('should be able to get notes', () => {
    const { result } = renderHook(() => useNotes(), {
      wrapper: NotesProvider,
    });

    expect(result.current.notes).toEqual([
      { id: '123', title: 'Example', content: 'Example' },
    ]);
  });
});
