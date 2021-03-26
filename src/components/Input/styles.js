import styled, { css } from 'styled-components';
import Button from '../Button';


export const Container = styled.div`
  padding: 8px 0;
  width: 100%;
  border-radius: 4px;
  position: relative;
`;

export const InputGroup = styled.div`
   background: rgba(0, 0, 0, 0.32);
   padding: 8px;
  display: flex;
  flex-direction: column;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  label {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #FFF;
    opacity: 0.5;
    margin-bottom: 2px;
    ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      opacity: 1;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #FFF;
    `}
  }
  input {
    color: #FFF;
    height: 100%;
    background: transparent;
    flex: 1;
    border: 0;
    &::placeholder {
      color: #FFF;
      opacity: 0.5;
    }
  }
  svg {
    margin-right: 16px;
  }
`;



export const SignButton = styled(Button)`
  height: 36px;
  width: 85px;
  position: absolute;
  top: 0;
  right: 10px;
  border-radius: 44px;
`;
