import React, { useCallback, useEffect, useState } from 'react';

import {
  RouteProp,
  useNavigation,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';
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
  ContainerImage,
  ContainerScrollView,
  ButtonAdd,
} from './styles';
import Counter from '../../components/Counter';
import { useProduct } from '../../context/product';
import { calculatePriceByAmount } from '../../utils/utils';

const ProductDetail: React.FC = () => {
  const { listProductsToBuy, updateListProductsToBuy } = useProduct();
  const navigation = useNavigation<NavigationProp>();
  const route: RouteProp<
    { params: { product: Product; hideButton: boolean } },
    'params'
  > = useRoute();

  const product = route?.params?.product;

  const hideButton = route?.params?.hideButton;

  const [amount, setAmount] = useState<number>(product?.amount || 1);
  const [observation, setObservation] = useState<string>(
    product.observation || '',
  );

  const isFocused = useIsFocused();

  const mountComponent = useCallback(() => {
    const productExists = listProductsToBuy.find(
      item => item.id === route.params.product.id,
    );

    if (productExists) {
      setAmount(productExists?.amount || 1);
    }
  }, [listProductsToBuy, route.params.product]);

  useEffect(() => {
    if (isFocused) {
      mountComponent();
    }
  }, [isFocused, mountComponent]);

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
          <ContainerImage animation="slideInRight" useNativeDriver delay={100}>
            <Image source={{ uri: `${product.image}` }} />
          </ContainerImage>
          <ContainerTexts animation="fadeInUp" useNativeDriver>
            <Text bold size={20}>
              {product.title}
            </Text>
            <Text size={15}>{product.description}</Text>
            <Text bold size={30}>
              {calculatePriceByAmount(
                product?.price.toFixed(2),
                hideButton ? 1 : amount,
              )}
            </Text>

            <Text />
            <Text size={15}>Observação: </Text>
            <Input
              value={observation}
              onChangeText={setObservation}
              autoCompleteType="off"
              autoCorrect={false}
              multiline
            />
            {!hideButton && (
              <ContainerButtons>
                <Counter amount={amount} setAmount={setAmount} />
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
