import React, { useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { useProduct } from '../../context/product';
import { getProductsValue, getQtdProducts } from '../../utils/utils';
import { NavigationProp } from '../../routes/types';

import Card from './Card';

import {
  Container,
  List,
  ContainerTotal,
  Text,
  ContainerTotalText,
  ButtonAdd,
} from './styles';
import Loading from '../../components/Loading';

const ListProductsPay: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { listProductsToBuy } = useProduct();
  const [loading, setLoading] = useState<boolean>(false);

  const renderItems = useCallback(({ item }) => {
    return <Card item={item} />;
  }, []);

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const handleSend = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      navigation.replace('PayFinished');
    }, 2000);
  }, [navigation]);

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
      {loading && <Loading />}
    </>
  );
};

export default ListProductsPay;
