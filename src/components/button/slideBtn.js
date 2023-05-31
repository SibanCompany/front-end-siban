import React from 'react';
import styled from 'styled-components';

const ButtonGroup = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-betweeen;
`;
const MoveBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  font-size: 2rem;
  font-weight: bold;
  background: none;
  position: absolute;
  top: 50%;
  &:first-child {
    left: 0;
  }
  &:last-child {
    right: 0;
  }
  // color: ${props => props.color || 'black'};
`;

function SlideBtn({ children, ...rest }) {
  return (
    <ButtonGroup>
      <MoveBtn {...rest}>
        <i id="left-btn" className="ri-arrow-left-s-line"></i>
      </MoveBtn>
      <MoveBtn {...rest}>
        <i id="right-btn" className="ri-arrow-right-s-line"></i>
      </MoveBtn>
    </ButtonGroup>
  );
}

export default SlideBtn;
