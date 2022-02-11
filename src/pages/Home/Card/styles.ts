import styled from 'styled-components/native';
import { View } from 'react-native-animatable';

export const ContainerParent = styled(View)``;

export const Container = styled.TouchableOpacity`
  height: 120px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 10px;
  flex-direction: row;
  padding: 10px;
`;

export const Image = styled.Image`
  height: 100%;
  width: 35%;
`;

export const ContainerTexts = styled.View`
  flex: 1;
  margin-left: 20px;
`;

interface TextProps {
  title?: boolean;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ title }) => (title ? '16px' : '14px')};
  font-weight: ${({ title }) => (title ? 'bold' : 'normal')};
  margin-bottom: 10px;
`;
