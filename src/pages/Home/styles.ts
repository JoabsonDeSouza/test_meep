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
