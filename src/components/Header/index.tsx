import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, GoBack } from './styles';

interface HeaderProps {
  title: string;
  goBack?: boolean;
}

const Header = ({ title, goBack }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <Container>
      <SafeAreaView />
      {goBack && (
        <GoBack onPress={() => navigation.goBack()}>
          <Title>{'<'}</Title>
        </GoBack>
      )}
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
