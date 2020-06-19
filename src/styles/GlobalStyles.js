import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #363640;
    --secondary: #F24849;
    --tertiary: #FFD037;
    --quaternary: #E8E8E8;
    
    --scrollbarBG: #CFD8DC;
    --thumbBG: #90A4AE;

    --white: #fff;
    --gray: #8a8c90;
  }

  html, body, #root {
    height: 100%;
  }
  
  body {
    background-color: var(--primary);
    -webkit-font-smoothing: antialiased;
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);

    ::-webkit-scrollbar {
      width: 11px;
    }

    ::-webkit-scrollbar-track {
      background: var(--scrollbarBG);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--thumbBG);
      border-radius: 6px;
      border: 3px solid var(--scrollbarBG);
    }
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
  }

  

`;
