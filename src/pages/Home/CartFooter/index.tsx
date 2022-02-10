import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useProduct } from '../../../context/product';

import { Container, Title, ContainerTexts } from './styles';
import { NavigationProp } from '../../../routes/types';
import { getProductsValue, getQtdProducts } from '../../../utils/utils';

const CartFooter = () => {
  const navigation = useNavigation<NavigationProp>();
  const { listProductsToBuy } = useProduct();

  return (
    <Container onPress={() => navigation.navigate('ListProductsPay')}>
      <ContainerTexts>
        <Title>{`${getQtdProducts(
          listProductsToBuy,
        )} PRODUTO(S) NO CARRINHO ${getProductsValue(
          listProductsToBuy,
        )}`}</Title>
      </ContainerTexts>
      <SafeAreaView />
    </Container>
  );
};

export default CartFooter;
