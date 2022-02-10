import React, { useState } from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../components/Header';
import { Product } from '../../model/product';
import { NavigationProp } from '../../routes/types';

import {
  Container,
  Image,
  Text,
  ContainerTexts,
  Input,
  ContainerButtons,
  ContainerScrollView,
  ButtonAdd,
} from './styles';
import Counter from '../../components/Counter';
import { useProduct } from '../../context/product';
import { formatValueByCurrency } from '../../utils/utils';

const ProductDetail: React.FC = () => {
  const { listProductsToBuy, updateListProductsToBuy } = useProduct();
  const navigation = useNavigation<NavigationProp>();
  const route: RouteProp<
    { params: { product: Product; hideButton: boolean } },
    'params'
  > = useRoute();

  const productExists = listProductsToBuy.find(
    item => item.id === route.params.product.id,
  );
  const product = productExists || route?.params?.product;

  const hideButton = route?.params?.hideButton;

  const [amount, setAmount] = useState<number>(product?.amount || 1);
  const currentPrice = product?.price * (product?.amount || 1);
  const [price, setPrice] = useState<string>(currentPrice.toString());
  const [observation, setObservation] = useState<string>(
    product?.observation || '',
  );

  const handleAddProduct = () => {
    const productToBuy: Product = {
      ...product,
      amount,
      observation,
    };

    updateListProductsToBuy(productToBuy);

    setTimeout(() => {
      navigation.navigate('ListProductsPay');
    }, 200);
  };

  return (
    <>
      <Header title="DETALHES DO PRODUTO" goBack />
      <ContainerScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Image source={{ uri: `${product.image}` }} />
          <ContainerTexts>
            <Text bold size={20}>
              {product.title}
            </Text>
            <Text size={15}>{product.description}</Text>
            <Text bold size={30}>
              {formatValueByCurrency(price)}
            </Text>

            <Text />
            <Text size={15}>Observação: </Text>
            <Input
              value={observation}
              onChangeText={setObservation}
              autoCompleteType="off"
              autoCorrect={false}
            />
            {!hideButton && (
              <ContainerButtons>
                <Counter
                  price={product?.price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                />
                <ButtonAdd onPress={handleAddProduct}>
                  <Text size={15} color="white" bold withOutMargin>
                    ADICIONAR
                  </Text>
                </ButtonAdd>
              </ContainerButtons>
            )}
          </ContainerTexts>
        </Container>
      </ContainerScrollView>
    </>
  );
};

export default ProductDetail;
