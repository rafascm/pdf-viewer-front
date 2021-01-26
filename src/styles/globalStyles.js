import { createGlobalStyle } from 'styled-components';

const colors = {
  white: '#fff',
  black: '#000',
  primary: '#333',
  secondary: '#eee',
  error: '#f55',
  warning: '#ffa500',
  pTransparent: '#333333AA',
};

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
  }

  #root {
    background-color: ${colors.primary};
    color: ${colors.secondary}
  }
`;

export { colors, GlobalStyles };
