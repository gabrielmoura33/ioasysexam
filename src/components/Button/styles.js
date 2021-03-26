import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #FFFFFF;
  color: #B22E6F;
  height: 85px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 50%;
  font-weight: 600;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#FFFFFF')};
  }
`;
