import React from 'react';
import Notes from '../../components/Notes';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Notes />
    </Container>
  );
};

export default Dashboard;
