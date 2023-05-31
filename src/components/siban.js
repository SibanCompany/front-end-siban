import React from 'react';
import styled from 'styled-components';
import InnerBox from './Inner';

const HomeSiban = styled.section`
  background: #000000;
  color: #ffffff;
  text-align: center;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5)
  );
  & > div {
    position: absolute;
    top: 15%;
    left: 5%;
  }
  & > div > p {
    font-size: 1rem;
    margin: 10px 0;
  }
  & > div > h2 {
    font-size: 4rem;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    & > div {
      position: static;
      margin: 70px auto;
    }
    & > div > p {
      font-size: 0.5rem;
      margin: 10px 0;
    }
    & > div > h2 {
      font-size: 2rem;
    }
  }
`;

function Siban() {
  return (
    <HomeSiban>
      <InnerBox height={'650px'} siban>
        <Cover>
          <div>
            <p> 예 술 창 작 집 단</p>
            <h2> [ 시 : 반 ] </h2>
            <p> 시 작 이 &nbsp; 반 이 다</p>
          </div>
        </Cover>
      </InnerBox>
    </HomeSiban>
  );
}

export default Siban;
