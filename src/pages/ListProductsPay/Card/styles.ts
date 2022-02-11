import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 120px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 10px;
  flex-direction: row;
  padding: 10px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 100px;
  width: 30%;
`;

export const ContainerTexts = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ContainerView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface TextProps {
  title?: boolean;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ title }) => (title ? '17px' : '14px')};
  font-weight: ${({ title }) => (title ? 'bold' : 'normal')};
  margin-bottom: 10px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const ImageDelete = styled.Image`
  width: 100%;
  height: 100%;
`;
