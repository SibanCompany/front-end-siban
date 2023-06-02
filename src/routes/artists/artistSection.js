import React, { useState } from 'react';
import styled from 'styled-components';
import ArtistArticle from './artistsArticle';
import SideNavForRouter from '../RouterSideNav';
import { Link } from 'react-router-dom';

const ProfileWrapper = styled.section`
  width: 1200px;
  height: 600px;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    width: 95%;
    height: auto;
    margin: 0 auto;
  }
`;

const artistInfo = [
  {
    name: '신락훈',
    age: '1992. 05. 21',
    body: '174cm / 95kg',
    email: 'rack0521@naver.com',
    instagram: 'raccoonee',
    skill: '마술, 강원도 사투리',
    represent: '-',
    rolePlay: [
      '그대 내 곁에 - 만수 역',
      '옥상 위 달빛이 머무는 자리 - 젊은 남편 역',
      '객 - 상인2 역',
      '오해 - 상인 역',
      '죽기 살기 - 연예인 역',
    ],
    musical: '',
    shortCut: [],
    musicVideo: '',
    drama: '로스쿨',
    src: '../assets/rakoon_main.jpg',
  },
  {
    name: '김만중',
    age: '1994. 12. 12',
    body: '175cm / 63kg',
    email: 'joong0204@naver.com',
    instagram: 'joong_oong',
    skill: '품평회, 독서',
    represent: '-',
    rolePlay: [
      '그대 내 곁에 - 김차사 역',
      '옥상 위 달빛이 머무는 자리 - 군인 역',
      '죽기살기 - 연예인 역',
      '이구아나 - 양녕 역',
      '여도 - 앙상블',
    ],
    musical: '',
    shortCut: [],
    musicVideo: '',
    src: '../assets/manjoong_main.jpg',
  },
  {
    name: '홍윤화',
    age: '1994. 05. 28',
    body: '180cm / 88kg',
    email: 'dbsghk528@naver.com',
    instagram: 'yoonhwa_h',
    skill: '-',
    represent: '-',
    rolePlay: [
      '면식범 - 재훈 역',
      '그대 내 곁에 - 만수 역',
      '더 앵글러 - 시형 역',
      '포기 = 또 다른 선택 - 우진 역',
    ],
    musical: '',
    shortCut: [],
    musicVideo: '',
    src: '../assets/yunhwa_main.jpg',
  },
  {
    name: '정재헌',
    age: '1994. 07. 16',
    body: '175cm / 62kg',
    email: 'jj213jj@naver.com',
    instagram: '-',
    skill: '-',
    represent: '-',
    rolePlay: ['그대 내 곁에 - 멀티남 역'],
    musical: '',
    shortCut: ['라이어스 - 김재현 역', '세대주의 명의변경 - 경운 역'],
    musicVideo: '',
    src: '../assets/jaehun_main.jpg',
  },
  {
    name: '최영광',
    age: '1996. 06. 25',
    body: '176cm / 64kg',
    email: 'cyg110@naver.com',
    instagram: 'c.glory_',
    skill: '운전, 태권도, 노래',
    represent: '-',
    rolePlay: [
      '나의 PS 파트너 - 승준 역',
      '면식범 - 남기 역',
      '그대 내 곁에 - 김차사 역',
      '더 앵글러 - 최진서 역',
      '마리보의 연인들 - 블레즈 역',
      '문 - 김과장 역',
      '창고에서 - 덕배 역',
    ],
    musical: '난리부르스 - 수혁 역',
    shortCut: ['새로고침 - 우진 역'],
    musicVideo: '끝맺음(prod.임석원)',
    src: '../assets/younggwang_main.jpg',
  },
];

function ArtistMainSection() {
  const nameList = ['신락훈', '김만중', '홍윤화', '정재헌', '최영광'];
  const [article, setArticle] = useState(
    <ArtistArticle
      imageUrl={artistInfo[0].src}
      height={`${artistInfo[0].rolePlay.length * 30}px`}
      firstGenre=""
      secondGenre="드라마"
      thirdGenre=""
      fourthGenre=""
      name={artistInfo[0].name}
      age={artistInfo[0].age}
      body={artistInfo[0].body}
      email={artistInfo[0].email}
      instagram={artistInfo[0].instagram}
      skill={artistInfo[0].skill}
      rolePlay={artistInfo[0].rolePlay}
      shortCut={artistInfo[0].shortCut}
      secondGenreList={artistInfo[0].drama}
      thirdGenreList=""
      fourthGenreList=""
    />
  );
  const changeArticle = e => {
    const artistName = e.target.id;

    for (let i = 0; i < nameList.length; i++) {
      if (artistName === nameList[i]) {
        setArticle(
          <ArtistArticle
            imageUrl={artistInfo[i].src}
            firstGenre={i === 3 || i === 4 ? '단편영화' : ''}
            secondGenre={i === 0 ? '드라마' : ''}
            thirdGenre={i === 4 ? '뮤지컬' : ''}
            fourthGenre={i === 4 ? 'M/V' : ''}
            height={`${artistInfo[i].rolePlay.length * 30}px`}
            name={artistInfo[i].name}
            age={artistInfo[i].age}
            body={artistInfo[i].body}
            email={artistInfo[i].email}
            instagram={artistInfo[i].instagram}
            skill={artistInfo[i].skill}
            rolePlay={artistInfo[i].rolePlay}
            shortCut={artistInfo[i].shortCut}
            secondGenreList={i === 0 ? artistInfo[0].drama : ''}
            thirdGenreList={artistInfo[i].musical}
            fourthGenreList={artistInfo[i].musicVideo}
          />
        );
      }
    }
  };
  return (
    <>
      <SideNavForRouter>
        <ul>
          {nameList.map((item, index) => (
            <Link to="" key={index}>
              <li>
                <span id={item} onClick={changeArticle}>
                  {item}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </SideNavForRouter>
      <ProfileWrapper>{article}</ProfileWrapper>
    </>
  );
}

export default ArtistMainSection;
