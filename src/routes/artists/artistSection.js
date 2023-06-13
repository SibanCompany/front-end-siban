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
    name: '윤수영',
    age: '1998. 09. 24',
    body: '159cm',
    email: 'elastin9291@naver.com',
    instagram: 'swimee',
    skill: '-',
    represent: '-',
    rolePlay: [
      '디:데이',
      '그대 내 곁에(강릉)',
      '댄스컬<로터스>',
      '댄스컬<7월의 크리스마스 호두까기 인형>',
    ],
    musical: '',
    shortCut: [],
    musicVideo: '',
    awards: [
      '<Fe-story 페스티벌> 재즈댄스 부문 금상',
      '<Dream up 힙합&재즈댄스 경연대회> 지도자상',
      '원주 다이나믹 댄싱 카니발 대상',
      '성남시의장배 생활체육 체조경연대회 우수상',
    ],
    src: '../assets/suyoung_main.jpg',
  },
  {
    name: '권기은',
    age: '1998. 08. 31',
    body: '160cm',
    email: 'rldms98@naver.com ',
    instagram: 'rlo_il.98',
    skill: '-',
    represent: '-',
    rolePlay: ['디:데이', '그대 내 곁에', '메뉴얼라이프', '앨리'],
    musical: '내일은 스타',
    shortCut: [],
    musicVideo: '',
    awards: [],
    src: '../assets/kieun_main.jpeg',
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
    src: '../assets/younggwang_main.jpeg',
  },
  {
    name: '양혜지',
    age: '1998. 04. 10',
    body: '163cm / 47kg',
    email: 'yhji9804@naver.com',
    instagram: '__hye_z_',
    skill: '-',
    represent: '-',
    rolePlay: ['디:데이', '적정온도', '무엇이 될꼬하니'],
    musical: '',
    shortCut: ['솔로봇상담', '시작', '갈매기'],
    musicVideo: '',
    awards: ['2021 미스한복선발대회 미소상'],
    src: '../assets/hyeji_main.jpeg',
  },
];

function ArtistMainSection() {
  const nameList = [
    '신락훈',
    '김만중',
    '윤수영',
    '권기은',
    '홍윤화',
    '정재헌',
    '최영광',
    '양혜지',
  ];
  const [article, setArticle] = useState(
    <ArtistArticle
      imageUrl={artistInfo[0].src}
      height={`${artistInfo[0].rolePlay.length * 30}px`}
      firstGenre=""
      secondGenre="드라마"
      thirdGenre=""
      fourthGenre=""
      awards=""
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
      awardsList={artistInfo[0].awards}
    />
  );
  const changeArticle = e => {
    const artistName = e.target.id;

    for (let i = 0; i < nameList.length; i++) {
      if (artistName === nameList[i]) {
        setArticle(
          <ArtistArticle
            imageUrl={artistInfo[i].src}
            firstGenre={i === 5 || i === 6 || i === 7 ? '단편영화' : ''}
            secondGenre={i === 0 ? '드라마' : ''}
            thirdGenre={i === 6 ? '뮤지컬' : ''}
            fourthGenre={i === 6 ? 'M/V' : ''}
            awards={i === 2 || i === 7 ? '수상경력' : ''}
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
            awardsList={artistInfo[i].awards}
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
