import { createGlobalStyle } from 'styled-components';
import bodyBackground from '../assets/backgroundBody.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100vh;
    width: 100%;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }


  body {
    background: url(${bodyBackground}) repeat center;
    background-size: 180%;
    color: ${props => props.theme.colors.text};
    font: 400 16px Heebo, sans-serif;
    font-size: 1.6rem;
  }

  button,input {
    cursor: pointer;
  }

`;
