import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
