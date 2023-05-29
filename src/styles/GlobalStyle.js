import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStlye = createGlobalStyle`
  ${reset}
  
  * {
  box-sizing: boerder-box;
  }

  html{
    font-size:16px;
  }

  body{
    font-size: 14px;
    background-color: #ffffff;
    font-family: 'Gowun Batang', serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ol, ul, li {
    list-style: none;
  }
  
  img {
    display: block;
    width: 100%;
  }

  
`;
