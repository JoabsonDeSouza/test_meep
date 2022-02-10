import { Product } from '../model/product';
import { StackNavigationProp } from '@react-navigation/stack';

export type RouteParams = {
  product?: Product;
  hideButton?: boolean;
};

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: RouteParams;
  Products: undefined;
  ListProductsPay: undefined;
};

export type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetail'
>;
