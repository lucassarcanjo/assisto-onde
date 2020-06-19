import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
  }

  :root {
    --primary: #363640;
    --secondary: #F24849;
    --tertiary: #FFD037;
    --quaternary: #E8E8E8;
    
    --white: #fff;
    --gray: #8a8c90;
  }

`;
