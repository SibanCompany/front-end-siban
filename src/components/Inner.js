import React from 'react';
import styled, { css } from 'styled-components';

function InnerBox({ children, height, ...rest }) {
  const Inner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    height: ${height};
    position: relative;
    ${props =>
      props.footer &&
      css`
        display: flex;
        align-items: center;
      `}
    ${props =>
      props.header &&
      css`
        display: flex;
      `}
    ${props =>
      props.siban &&
      css`
        display: flex;
        background: url('../assets/main_photo.png') no-repeat;
        background-size: cover;
        position: relative;
        @media only screen and (max-width: 480px) {
          width: 300px;
          background: none;
          height: 300px;
        }
      `}
  `;
  return <Inner {...rest}> {children} </Inner>;
}
InnerBox.defaultProps = {
  height: '500px',
};
export default InnerBox;
