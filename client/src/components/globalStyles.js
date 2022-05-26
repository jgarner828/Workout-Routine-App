import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;

    text-align: center;
    padding: 1rem;

    h1 {
      color: ${({ theme }) => theme.text};
    }

    
  }
  `
