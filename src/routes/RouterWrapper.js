import React from 'react';
import styled from 'styled-components';

function WrapperForRouter({ children, height, mobile_height }) {
  const RouterWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto 100px auto;
    height: ${height};
    display: flex;

    @media only screen and (max-width: 480px) {
      max-width: 100%;
      margin: 0 auto 50px auto;
      display: block;
    }
  `;

  return <RouterWrapper> {children} </RouterWrapper>;
}

WrapperForRouter.defaultProps = {
  height: '600px',
};

export default WrapperForRouter;
