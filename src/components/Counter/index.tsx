import React from 'react';

import { ButtonCount, Count, Container, Text } from './styles';

interface Props {
  amount: number;
  setAmount: (value: number) => void;
}

const Counter = ({ amount, setAmount }: Props) => {
  const handleAddCount = () => {
    if (amount >= 10) {
      return;
    }
    setAmount(amount + 1);
  };

  const handleRemoveCount = () => {
    if (amount <= 1) {
      return;
    }

    setAmount(amount - 1);
  };

  return (
    <Container>
      <ButtonCount onPress={handleRemoveCount}>
        <Text size={25} color="white">
          -
        </Text>
      </ButtonCount>
      <Count>
        <Text size={25}>{amount}</Text>
      </Count>
      <ButtonCount onPress={handleAddCount}>
        <Text size={25} color="white">
          +
        </Text>
      </ButtonCount>
    </Container>
  );
};

export default Counter;
