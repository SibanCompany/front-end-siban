import React from 'react';
import styled from 'styled-components';

function SideNavForRouter({ children }) {
  return <SideNav> {children} </SideNav>;
}

const SideNav = styled.div`
  width: 200px;
  height: auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  & > ul > a > li {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 50px 0;
    cursor: pointer;
  }
  & > ul > a > li:hover {
    color: rgba(0, 0, 0, 0.4);
    text-decoration: underline;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
    margin: 0 auto;
    & > ul {
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    & > ul > a > li {
      /* width: 20%; */
      font-size: 0.65rem;
      font-weight: bold;
      padding: 20px 10px;
      margin: 0;
    }
    & > ul > a > li:not(:last-child) {
      border-right: 1px solid #e5e5e5;
    }
  }
`;

export default SideNavForRouter;
