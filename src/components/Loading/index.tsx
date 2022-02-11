import React from 'react';

import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size={'large'} color="white" />
      <Text>Aguarde um instante...</Text>
    </Container>
  );
};

export default Loading;
