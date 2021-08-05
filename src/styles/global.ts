import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  .Modal {
    position: relative;
    top: 20%;
    display: flex;
    margin: 0 auto;
    height: 484px;
    width: 400px;
    background: #fff;
    border-radius: 5px;
    max-width: 1120px;

    @media (max-width: 425px) {
      width: 100%;
      margin: 0;
      top: 20%;
      min-width: 0px;
    }
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }

`;
