import React from 'react';
import styled from 'styled-components';

const RouterHeader = styled.header`
  margin: 0 auto 20px auto;
  padding: 100px 0 0 0;
  border-bottom: 1px solid #e5e5e5;
  max-width: 860px;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    max-width: 90%;
    padding: 30px 0 5px 0;
    margin: 0 auto;
    height: auto;
    font-size: 1rem;
  }
`;

function HeaderForRouter({ page }) {
  return <RouterHeader>{page}</RouterHeader>;
}

export default HeaderForRouter;
