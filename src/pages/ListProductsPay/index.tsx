import React, { useCallback } from 'react';
import Header from '../../components/Header';
import { useProduct } from '../../context/product';
import { getProductsValue, getQtdProducts } from '../../utils/utils';
import Card from './Card';

import {
  Container,
  List,
  ContainerTotal,
  Text,
  ContainerTotalText,
  ButtonAdd,
} from './styles';

const ListProductsPay: React.FC = () => {
  const { listProductsToBuy } = useProduct();

  const renderItems = useCallback(({ item }) => {
    return <Card item={item} />;
  }, []);

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const handleSend = useCallback(() => {}, []);

  return (
    <>
      <Header title="LISTA DE PRODUTOS" goBack />
      <Container>
        <List
          data={listProductsToBuy}
          keyExtractor={keyExtractor}
          renderItem={renderItems}
        />
        <ContainerTotal>
          <ContainerTotalText>
            <Text bold>TOTAL DE ITENS: </Text>
            <Text>{getQtdProducts(listProductsToBuy)}</Text>
          </ContainerTotalText>
          <ContainerTotalText>
            <Text bold>TOTAL A PAGAR: </Text>
            <Text>{getProductsValue(listProductsToBuy)}</Text>
          </ContainerTotalText>
          <ButtonAdd onPress={handleSend}>
            <Text size={15} color="white" bold withOutMargin>
              ENVIAR PEDIDO
            </Text>
          </ButtonAdd>
        </ContainerTotal>
      </Container>
    </>
  );
};

export default ListProductsPay;
