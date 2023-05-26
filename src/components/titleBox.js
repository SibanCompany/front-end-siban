import React from 'react';
import styled, { css } from 'styled-components';

function TitleBox({ children, ...rest }) {
  const TitleBox = styled.div`
    max-width: 860px;
    padding-bottom: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: end;
    border-bottom: 1px solid #2b2b2b;
    & > h1 {
      font-size: 2.2rem;
      font-weight: bold;
    }
    & > p {
      color: #333;
    }
    & > p:hover {
      color: #d2d2d2;
    }
    ${props =>
      props.loation &&
      css`
        @media only screen and (max-width: 480px) {
          & > h1 {
            font-size: 1rem;
          }
        }
      `}
    @media only screen and (max-width: 480px) {
      max-width: 90%;
      & > h1 {
        font-size: 1.5rem;
      }
      & > p {
        font-size: 0.7rem;
      }
    }
  `;

  return <TitleBox {...rest}> {children} </TitleBox>;
}

export default TitleBox;
