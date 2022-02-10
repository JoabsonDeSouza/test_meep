import { Product } from '../model/product';

export const getProductsValue = (list: Product[]) => {
  const productsValue = list.reduce(
    (acc, product) => acc + (product.amount || 1) * product.price,
    0,
  );

  return formatValueByCurrency(productsValue);
};

export const getQtdProducts = (list: Product[]) => {
  const qtdProducts = list.reduce(
    (acc, product) => acc + (product.amount || 1),
    0,
  );

  return qtdProducts;
};

export function formatValueByCurrency(value: string | number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value));
}
