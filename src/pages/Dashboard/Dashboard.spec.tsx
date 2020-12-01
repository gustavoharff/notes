import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './index';

jest.mock('../../hooks/notes', () => ({
  useNotes: () => ({
    notes: [{ id: '123', title: 'Title test.', content: 'Description test.' }],
  }),
}));

test('Dashboard should renders', () => {
  const { getByText } = render(<Dashboard />);

  expect(getByText('Title test.')).toBeTruthy();
});
