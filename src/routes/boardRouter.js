import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderForRouter from './RouterHeader';
import WrapperForRouter from './RouterWrapper';
import SideNavForRouter from './RouterSideNav';

const Board = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  width: 100%;
  height: 600px;
  text-align: center;
  & p {
    padding-top: 200px;
  }
  & ul {
    display: flex;
    width: 80%;
    margin: 0 auto 0 30px;
  }
  & .notice__list:hover {
    background: rgba(0, 0, 0, 0.03);
  }
  & .notice__title {
    padding: 20px 0;
    font-size: 1rem;
    border-bottom: 1px solid #d5d5d5;
  }
  & .notice__list {
    font-size: 1rem;
    padding: 20px 0;
    border-bottom: 1px solid #e7e7e7;
  }
  & ul li:nth-child(1),
  & ul li:nth-child(2),
  & ul li:nth-child(4) {
    width: 15%;
  }
  & ul li:nth-child(3) {
    width: 55%;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
    width: 90%;
    margin: 0 auto;
    & ul {
      width: 100%;
      margin: 0 auto;
    }
    & .notice__title {
      margin-top: 50px;
      padding: 20px 0;
      font-size: 0.8rem;
    }
    & .notice__list {
      font-size: 0.6rem;
    }
    & ul li:nth-child(1) {
      width: 10%;
    }
    & ul li:nth-child(2) {
      width: 20%;
    }
  }
`;

function BoardRouter() {
  const boardNavList = ['공지사항', '배우에게', '레슨문의', '대관문의'];

  const [boardSubTitle, setBoardSubTitle] = useState(boardNavList[0]);

  const changeBoard = e => {
    const navId = parseInt(e.target.id);

    for (let i = 0; i < boardNavList.length; i++) {
      if (navId === i) {
        setBoardSubTitle(boardNavList[i]);
      }
    }
  };
  return (
    <div>
      <HeaderForRouter page={`[시: 반] 소통 - ${boardSubTitle}`} />
      <WrapperForRouter>
        <SideNavForRouter height={'100%'}>
          <ul>
            {boardNavList.map((item, index) => (
              <li key={index} id={index} onClick={changeBoard}>
                {item}
              </li>
            ))}
          </ul>
        </SideNavForRouter>
        <Board>
          <section className="notice--section">
            <ul className="notice__title">
              <li> 번호 </li>
              <li> 날짜 </li>
              <li> 제목 </li>
              <li> 글쓴이 </li>
            </ul>
            <ul className="notice__list">
              <li>1</li>
              <li>2022-05-24</li>
              <li>첫번째 공지사항입니다.</li>
              <li> Siban </li>
            </ul>
            <ul className="notice__list">
              <li>2</li>
              <li>2022-05-24</li>
              <li>두번째 테스트입니다.</li>
              <li> Admin </li>
            </ul>
            <ul className="notice__list">
              <li>3</li>
              <li>2022-05-24</li>
              <li>세번째 공지사항 테스트입니다.</li>
              <li> Siban </li>
            </ul>
          </section>
        </Board>
      </WrapperForRouter>
    </div>
  );
}

export default BoardRouter;
