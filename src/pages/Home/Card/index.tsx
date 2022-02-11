import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { NavigationProp } from '../../../routes/types';
import { formatValueByCurrency } from '../../../utils/utils';

import {
  Container,
  Image,
  ContainerTexts,
  Text,
  ContainerParent,
} from './styles';
import { CardProps } from './types';

const Card = ({ item, index }: CardProps) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ContainerParent animation="slideInRight" useNativeDriver delay={index}>
      <Container
        onPress={() => navigation.navigate('ProductDetail', { product: item })}>
        <Image source={{ uri: `${item.image}` }} />
        <ContainerTexts>
          <Text>{item.title}</Text>
          <Text title>{formatValueByCurrency(item.price)}</Text>
        </ContainerTexts>
      </Container>
    </ContainerParent>
  );
};

export default Card;
