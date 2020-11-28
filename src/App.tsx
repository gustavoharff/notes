import React from 'react';
import reactDOM from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';

import Greetings from './components/Greetings';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Greetings />
    </>
  );
};

reactDOM.render(<App />, document.getElementById('root'));
