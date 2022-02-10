import { StackNavigationProp } from '@react-navigation/stack';
import { Product } from '../../../model/product';
import { RootStackParamList } from '../../../routes/types';
export interface CardProps {
  item: Product;
}

export type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetail'
>;
