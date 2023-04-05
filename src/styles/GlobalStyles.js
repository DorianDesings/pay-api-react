import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

const { darkBlue, bgColor } = COLORS;

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }

  body{
    margin: 0;
    color: ${darkBlue};
    background-color: ${bgColor};
    font-family: 'Public Sans', sans-serif;
  }

  h1,
  h2,
  h3{font-family: 'DM Serif Display', serif;}

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;

export { GlobalStyles };
