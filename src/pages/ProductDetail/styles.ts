import styled from 'styled-components/native';
import { View } from 'react-native-animatable';

export const ContainerScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 150,
  },
})`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
`;

export const ContainerImage = styled(View)`
  width: 100%;
  background: white;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 200px;
  width: 80%;
  align-self: center;
  background: white;
`;

export const ContainerTexts = styled(View)`
  flex: 1;
  padding: 20px;
`;

interface TextProps {
  size?: number;
  bold?: boolean;
  color?: string;
  withOutMargin?: boolean;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size }) => (size ? `${size}px` : '14px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  margin-bottom: ${({ withOutMargin }) => (withOutMargin ? '0px' : '10px')};
  color: ${({ color }) => (color ? color : '#333')};
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 8px;
  border-color: #ddd;
  width: 100%;
  min-height: 60px;
  padding: 10px;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 45%;
  height: 50px;
  margin-left: 10px;
  border-radius: 8px;
  background: green;
  align-items: center;
  justify-content: center;
`;
