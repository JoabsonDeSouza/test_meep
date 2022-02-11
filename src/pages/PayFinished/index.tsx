import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useProduct } from '../../context/product';
import { NavigationProp } from '../../routes/types';

import { Container, Text } from './styles';

const PayFinished = () => {
  const navigation = useNavigation<NavigationProp>();
  const { getProductsService } = useProduct();

  useEffect(() => {
    getProductsService();
    setTimeout(() => {
      navigation.replace('Products');
    }, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Text>Compra Finalizada com Sucesso!</Text>
    </Container>
  );
};

export default PayFinished;
