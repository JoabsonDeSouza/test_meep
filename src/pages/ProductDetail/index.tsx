import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const ProductDetail: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Product Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
