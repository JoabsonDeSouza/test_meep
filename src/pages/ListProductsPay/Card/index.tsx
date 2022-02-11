import React, { useEffect, useState } from 'react';

import Counter from '../../../components/Counter';

import {
  Container,
  Image,
  ContainerTexts,
  Text,
  ContainerView,
} from './styles';
import { CardProps } from './types';
import { calculatePriceByAmount } from '../../../utils/utils';
import { useProduct } from '../../../context/product';

const Card = ({ item }: CardProps) => {
  const { updateListProductsToBuy } = useProduct();

  const [amount, setAmount] = useState<number>(item?.amount || 1);

  useEffect(() => {
    if (amount !== item?.amount) {
      updateListProductsToBuy({ ...item, amount });
    }
  }, [amount, item, updateListProductsToBuy]);

  return (
    <Container>
      <Image source={{ uri: `${item.image}` }} />
      <ContainerTexts>
        <Text>{item.title}</Text>
        <ContainerView>
          <Text title>
            {calculatePriceByAmount(item?.price.toFixed(2), amount)}
          </Text>
          <Counter amount={amount} setAmount={setAmount} />
        </ContainerView>
      </ContainerTexts>
    </Container>
  );
};

export default Card;
