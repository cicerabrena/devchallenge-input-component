import { createGlobalStyle } from 'styled-components';

import '@fontsource/noto-sans-jp';

const GlobalStyle = createGlobalStyle`

  * {
    border: 0
    margin: 0;
  }

  body {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
    font-size: 16px;
  }

`;

export default GlobalStyle;
