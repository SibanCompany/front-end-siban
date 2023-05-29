import React from 'react';
import styled from 'styled-components';
import SlideBox from './slideBox';

const ProfileTiles = styled.li`
  width: 300px;
  height: 360px;
  & > div,
  img {
    width: 100%;
    height: 100%;
  }
  & > div > img {
    background-size: cover;
  }
  :not(last-child) {
    margin-right: 20px;
  }
  & p {
    font-size: 1.2rem;
    margin: 10px 0;
  }
  & a {
    font-size: 1rem;
    &:hover {
      color: rgba(0, 0, 0, 0.4);
    }
  }
  @media only screen and (max-width: 480px) {
    width: 165px;
    height: 215px;
    & p {
      font-size: .8rem;
    }
    & a {
      font-size: .8rem;
  }
`;

const artistProfile = [
  {
    name: '신락훈',
    src: '../assets/rakoon_main.jpg',
    instaAc: 'raccoonee_',
  },
  {
    name: '김만중',
    src: '../assets/manjoong_main.jpg',
    instaAc: 'joong_oong',
  },
  {
    name: '홍윤화',
    src: '../assets/yunhwa_main.jpg',
    instaAc: 'yoonhwa_h',
  },
  {
    name: '정재헌',
    src: '../assets/jaehun_main.jpg',
    instaAc: 'jung_jh9407',
  },
  {
    name: '최영광',
    src: '../assets/younggwang_main.jpg',
    instaAc: 'c.glory',
  },
  // {
  //   name: "윤수영",
  //   src: "../assets/suyoung_main.jpg",
  //   instaAc: "swimee",
  // },
];

function Artist() {
  return (
    <SlideBox Name="Artist">
      {artistProfile.map((item, index) => (
        <ProfileTiles key={index}>
          <div>
            <img src={item.src} alt={item.name} />
            <p> {item.name} </p>
            <a
              href={`{https://instagram.com/${item.instaAc}_?utm_medium=copy_link}`}
            >
              @{item.instaAc}
            </a>
          </div>
        </ProfileTiles>
      ))}
    </SlideBox>
  );
}

export default Artist;
