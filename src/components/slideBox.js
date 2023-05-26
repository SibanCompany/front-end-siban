import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SlideBtn from './button/slideBtn';
import InnerBox from './Inner';
import TitleBox from './titleBox';

const BoxHome = styled.section`
  padding: 100px 0;
  text-align: center;
  @media only screen and (max-width: 480px) {
    padding: 100px 0 0 0;
  }
`;

const BoxMain = styled.div`
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  @media only screen and (max-width: 480px) {
    max-width: 90%;
    height: 80%;
  }
`;
const MainWrapper = styled.div`
  max-width: 100%;
  height: 100%;
  margin-top: 50px;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    overflow: scroll;
  }
`;
const MainSlide = styled.ul`
  width: 1980px;
  position: abosolute;
  top: 0;
  left: 320px;
  display: flex;
  align-items: center;
  transition: 0.7s ease;
  @media only screen and (max-width: 480px) {
    width: 825px;
  }
`;

function SlideBox({ children, Name }) {
  const slideBtn = e => {
    const id = e.target.id;
    const artWrapper = document.querySelector('.slide--wrapper--artist');
    const acWrapper = document.querySelector('.slide--wrapper--activity');

    if (id === 'left-btn') {
      if (Name === 'Artist') {
        artWrapper.style.transform = `translateX(0)`;
      } else {
        acWrapper.style.transform = `translateX(0)`;
      }
    } else if (id === 'right-btn') {
      if (Name === 'Artist') {
        artWrapper.style.transform = `translateX(-960px)`;
      } else {
        acWrapper.style.transform = `translateX(-960px)`;
      }
    }
  };

  return (
    <BoxHome>
      <InnerBox>
        <TitleBox>
          <h1> [시: 반] {Name === 'Artist' ? '아티스트' : '일상'} </h1>
          <p>
            <Link to={Name === 'Artist' ? '/artists' : '/activity'}>
              자세히 보기
            </Link>
          </p>
        </TitleBox>
        <BoxMain>
          <MainWrapper>
            <MainSlide
              className={
                Name === 'Artist'
                  ? 'slide--wrapper--artist'
                  : 'slide--wrapper--activity'
              }
            >
              {children}
            </MainSlide>
          </MainWrapper>
        </BoxMain>
        <SlideBtn
          onClick={slideBtn}
          style={
            window.innerWidth < 480 ? { display: 'none' } : { display: 'block' }
          }
        />
      </InnerBox>
    </BoxHome>
  );
}

export default SlideBox;
