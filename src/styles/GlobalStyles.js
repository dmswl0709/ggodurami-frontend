import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background-color: #FFEFD5;
    background-attachment: fixed; /* 배경 고정 */
  }

  #root {
    width: 100%;
    min-height: 100vh;
    background-color: #FFEFD5; /* 추가 배경색 보장 */
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
