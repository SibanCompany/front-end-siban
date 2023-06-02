import React, { useState } from 'react';
import HeaderForRouter from '../../routes/RouterHeader';
import WrapperForRouter from '../../routes/RouterWrapper';
import SideNavForRouter from '../../routes/RouterSideNav';
import { Link, useSearchParams } from 'react-router-dom';
import * as S from './Board.style';
import CommunityBoard from './CommunityBoard/CommunityBoard';
import SpaceRental from './SpaceRental/SpaceRental';

function Board() {
  const [menuTitle, setMenuTitle] = useState('공지사항');
  const [searchParams, setSearchParams] = useSearchParams();

  const updateMenuTitle = e => {
    setMenuTitle(e.target.innerHTML);
  };

  const currentLink = searchParams.get('boardType');

  return (
    <div>
      <HeaderForRouter page={`[시: 반] 소통 - ${menuTitle}`} />
      <WrapperForRouter>
        <SideNavForRouter>
          <ul>
            {BOARD_MENU.map(({ id, title, link }) => (
              <Link key={id} to={link}>
                <li onClick={updateMenuTitle}>{title}</li>
              </Link>
            ))}
          </ul>
        </SideNavForRouter>
        <S.Community>
          <S.NoticeContainer>
            {currentLink === 'space-rental' ? null : (
              <S.NoticeHeader className="notice__title">
                <S.NoticeIndex flex="1"> 번호 </S.NoticeIndex>
                <S.NoticeIndex flex="2"> 날짜 </S.NoticeIndex>
                <S.NoticeIndex flex="5">제목</S.NoticeIndex>
                <S.NoticeIndex flex="2"> 글쓴이 </S.NoticeIndex>
              </S.NoticeHeader>
            )}

            {currentLink === 'space-rental' ? (
              <SpaceRental />
            ) : (
              <CommunityBoard menuLink={currentLink || 'notice'} />
            )}
          </S.NoticeContainer>
        </S.Community>
      </WrapperForRouter>
    </div>
  );
}

export default Board;

const BOARD_MENU = [
  { id: 1, title: '공지사항', link: '?boardType=notice' },
  { id: 2, title: '배우에게', link: '?boardType=forActor' },
  { id: 3, title: '레슨문의', link: '?boardType=inquiry-lesson' },
  { id: 4, title: '대관문의', link: '?boardType=space-rental' },
];

/* <ul className="notice__list">
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
</ul> */
