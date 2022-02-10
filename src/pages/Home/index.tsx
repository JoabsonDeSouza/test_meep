import React, { useCallback } from 'react';
import Footer from './CartFooter';
import Header from '../../components/Header';
import { useProduct } from '../../context/product';
import Card from './Card';

import { Container, List } from './styles';

const Home: React.FC = () => {
  const { listProducts, listProductsToBuy } = useProduct();

  const renderItems = useCallback(({ item }) => {
    return <Card item={item} />;
  }, []);

  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <>
      <Header title="CATÁLOGO" />
      <Container>
        <List
          data={listProducts}
          keyExtractor={keyExtractor}
          renderItem={renderItems}
        />
      </Container>
      {listProductsToBuy.length > 0 && <Footer />}
    </>
  );
};

export default Home;
