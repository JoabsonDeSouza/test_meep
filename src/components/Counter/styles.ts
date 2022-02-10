import styled from 'styled-components/native';

export const ButtonCount = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  background: green;
  border-radius: 8px;
`;

export const Count = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Container = styled.View`
  flex-direction: row;
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
