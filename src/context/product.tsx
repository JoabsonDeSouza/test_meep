import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Product } from '../model/product';
import { GetAllProducts } from '../services/apiProducts';

interface ProductContextData {
  listProducts: Product[];
  listProductsToBuy: Product[];
  updateListProductsToBuy: (product: Product) => void;
}

const ProductContext = createContext({} as ProductContextData);

const ProductProvider: React.FC = ({ children }) => {
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [listProductsToBuy, setListProductsToBuy] = useState<Product[]>([]);

  const getProductsService = async () => {
    console.log('testa?');
    try {
      const result = await GetAllProducts();
      setListProducts(result.data);
    } catch (error) {
      setListProducts([]);
    }
  };

  const updateListProductsToBuy = useCallback(
    (product: Product) => {
      console.log('listProductsToBuy', listProductsToBuy.length, product.id);
      if (listProductsToBuy.length === 0) {
        setListProductsToBuy([product]);
        return;
      }

      const checkProduct = listProductsToBuy.find(
        item => item.id === product.id,
      );
      if (!checkProduct) {
        setListProductsToBuy([...listProductsToBuy, product]);
        return;
      }

      const updateList = listProductsToBuy.map(item => {
        if (item.id === product.id) {
          return product;
        }
        return item;
      });

      setListProductsToBuy(updateList);
    },
    [listProductsToBuy],
  );

  const initialState = useCallback(async () => {
    await getProductsService();
  }, []);

  useEffect(() => {
    initialState();
  }, [initialState]);

  return (
    <ProductContext.Provider
      value={{
        listProducts,
        listProductsToBuy,
        updateListProductsToBuy,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

function useProduct() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used inside ProductContext');
  }

  return context;
}

export { ProductProvider, useProduct };
