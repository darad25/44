import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
  font-family: 'Open Sans Condensed', 'Varela Round';
  padding: 20px 40px;
  height: 100%;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}    
 
a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

#root {
  min-height: 0vh; /* Set this to control the height across all pages */
  max-height: 280vh; /* Limit the height */
  overflow-y: auto; /* Allow vertical scrolling if needed */
  }
`