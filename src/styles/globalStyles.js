import { createGlobalStyle } from 'styled-components';

const colors = {
  white: '#fff',
  black: '#000',
  primary: '#f2f2f2',
  secondary: '#585858',
  disabled: '#eee',
  pTransparent: '#58585850',
};

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    background-color: ${colors.primary};
  }

  #root {
    color: ${colors.secondary}
  }

  .react-pdf__Page__textContent {
    top: 0;
    left: 0;
    transform: none;
  }

  .react-pdf__Page__annotations.annotationLayer {
    display: none;
  }
`;

export { colors, GlobalStyles };
