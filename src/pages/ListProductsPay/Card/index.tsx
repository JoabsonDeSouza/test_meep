import React, { useEffect, useState } from 'react';

import Counter from '../../../components/Counter';

import {
  Container,
  Image,
  ContainerTexts,
  Text,
  ContainerView,
  ButtonDelete,
  ImageDelete,
} from './styles';
import { CardProps } from './types';
import { calculatePriceByAmount } from '../../../utils/utils';
import { useProduct } from '../../../context/product';

const Card = ({ item }: CardProps) => {
  const { updateListProductsToBuy, removeProductToBuy } = useProduct();

  const [amount, setAmount] = useState<number>(item?.amount || 1);

  useEffect(() => {
    if (amount !== item?.amount) {
      updateListProductsToBuy({ ...item, amount });
    }
  }, [amount, item, updateListProductsToBuy]);

  const handleDelete = () => {
    removeProductToBuy(item);
  };

  return (
    <Container animation="slideInRight" useNativeDriver>
      <Image source={{ uri: `${item.image}` }} />
      <ContainerTexts>
        <Text>{item.title}</Text>
        <ContainerView>
          <Text title>
            {calculatePriceByAmount(item?.price.toFixed(2), amount)}
          </Text>
          <Counter amount={amount} setAmount={setAmount} />
        </ContainerView>
        <Text>{item.observation}</Text>
        <ButtonDelete onPress={handleDelete}>
          <ImageDelete
            source={{
              uri: 'https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/trash-icon-14-256.png',
            }}
          />
        </ButtonDelete>
      </ContainerTexts>
    </Container>
  );
};

export default Card;
