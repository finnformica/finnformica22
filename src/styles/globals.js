import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  // style code blocks
  pre {
    padding: 2rem;

    @media ${(props) => props.theme.breakpoints.sm} {
      padding: 2rem 0;
    }
  }

  .hljs {
    color: #cfcfcf;
    background: #0F1624;
    border-radius: 5px;
  }

  .blog-img {
    width: 80%;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 15px
  }
`;

export default GlobalStyles;
