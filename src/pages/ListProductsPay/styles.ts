import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ececec;
`;

export const List = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20, paddingBottom: 100 },
})``;

export const ContainerTotal = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 20px;
`;

export const ContainerTotalText = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

interface TextProps {
  size?: number;
  bold?: boolean;
  color?: string;
  withOutMargin?: boolean;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size }) => (size ? `${size}px` : '18px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  margin-bottom: ${({ withOutMargin }) => (withOutMargin ? '0px' : '10px')};
  color: ${({ color }) => (color ? color : '#333')};
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background: green;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
