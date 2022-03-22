import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
                font-family: 'Roboto', sans-serif;
                background: #f7f5ff;

            h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 1.8rem;
            }

            h3 {
                font-size: 1.5rem;
            }

            p {
                font-size: 1.3rem;
            }
        }      
    }

`;
