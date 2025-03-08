import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
   *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
  body {
    font-size: 62.5%;
    height: 100vh;
    max-width: 100vw;
    font-family: "Inter", serif;
  }
 #root{
  height: 100%;
  background-color: #efeded;
 }

`;
 
export default GlobalStyle;