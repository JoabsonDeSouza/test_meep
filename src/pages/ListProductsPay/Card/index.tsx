import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import Counter from '../../../components/Counter';

import {
  Container,
  Image,
  ContainerTexts,
  Text,
  ContainerView,
} from './styles';
import { CardProps, NavigationProp } from './types';
import { formatValueByCurrency } from '../../../utils/utils';
import { useProduct } from '../../../context/product';

const Card = ({ item }: CardProps) => {
  const { updateListProductsToBuy } = useProduct();
  const navigation = useNavigation<NavigationProp>();

  const [amount, setAmount] = useState<number>(item?.amount || 1);
  const [price, setPrice] = useState<string>(item?.price.toString());

  useEffect(() => {
    if (amount !== item?.amount) {
      updateListProductsToBuy({ ...item, amount });
    }
  }, [amount, item, updateListProductsToBuy]);

  return (
    <Container
      onPress={() =>
        navigation.navigate('ProductDetail', {
          product: item,
          hideButton: true,
        })
      }>
      <Image source={{ uri: `${item.image}` }} />
      <ContainerTexts>
        <Text>{item.title}</Text>
        <ContainerView>
          <Text title>{formatValueByCurrency(price)}</Text>
          <Counter
            price={item?.price}
            setPrice={setPrice}
            amount={amount}
            setAmount={setAmount}
          />
        </ContainerView>
      </ContainerTexts>
    </Container>
  );
};

export default Card;
