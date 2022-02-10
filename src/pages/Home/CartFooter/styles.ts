import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  background-color: green;
`;

export const ContainerTexts = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: white;
  font-weight: bold;
`;
