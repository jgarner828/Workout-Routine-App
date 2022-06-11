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

    button {
      margin: 1rem;
    }

    .form-item{
      margin: 1rem;
    }

    .form-check {
      margin: 1rem;
    }

    .weeksBoxes {
      display: flex;
      flex-align: row;
    }

    .add-exercise-form {
      border: solid 5px blue;
      border-radius: 25px;
    }

  }
  `
