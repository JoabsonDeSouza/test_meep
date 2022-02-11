import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RootStackParamList } from './types';

import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import ListProductsPay from '../pages/ListProductsPay';
import PayFinished from '../pages/PayFinished';

const Stack = createStackNavigator<RootStackParamList>();

function ProductsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Stack.Screen name="ListProductsPay" component={ListProductsPay} />
      <Stack.Screen name="PayFinished" component={PayFinished} />
    </Stack.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Products" component={ProductsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
