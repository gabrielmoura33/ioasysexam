import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import sgnInBackgroundImg from '../../assets/background.png';
import Tooltip from '../../components/Tooltip';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: url(${sgnInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  @media (max-width: 670px) {
    background: url(${sgnInBackgroundImg}) no-repeat center;
    background-size: cover;
  }
`;

export const Background = styled.div`
  flex: 1;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const FormBase = styled(Form)`
  position: relative;
  margin: 80px 0;
  width: 340px;
  img {
    margin-bottom: 10%;
  }
  h1 {
    margin-bottom: 24px;
  }

  @media (max-width: 340px) {
    width: 270px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  position: absolute;
  left: 20%;
  top: 130%;

  span {
    background: rgba(255, 255, 255, 0.5);
    color: #000;

    &::before {
      border-color: #fff transparent;
    }
  }
`;
