import React from 'react';
import styled from 'styled-components';

function SideNavForRouter({ children }) {
  const SideNav = styled.div`
    width: 200px;
    height: auto;
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    & > ul > li {
      font-size: 1.1rem;
      font-weight: bold;
      margin: 50px 0;
      cursor: pointer;
    }
    & > ul > li:hover {
      color: rgba(0, 0, 0, 0.4);
      text-decoration: underline;
    }

    @media only screen and (max-width: 480px) {
      width: 90%;
      margin: 0 auto;
      & > ul {
        margin-top: 10px;
        display: flex;
      }
      & > ul > li {
        width: 20%;
        font-size: 0.65rem;
        font-weight: bold;
        padding: 20px 10px;
        margin: 0;
      }
      & > ul > li:not(:last-child) {
        border-right: 1px solid #e5e5e5;
      }
    }
  `;
  return <SideNav> {children} </SideNav>;
}

export default SideNavForRouter;
