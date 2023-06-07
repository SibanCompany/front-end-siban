import React from 'react';
import styled from 'styled-components';

function WrapperForRouter({ children }) {
  return <RouterWrapper> {children} </RouterWrapper>;
}

const RouterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto 100px auto;
  display: flex;

  @media only screen and (max-width: 480px) {
    max-width: 100%;
    margin: 0 auto 50px auto;
    display: block;
  }
`;

export default WrapperForRouter;
