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
    margin: 0 auto;
    object-fit: contain;
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

export const artistProfile = [
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
    name: '윤수영',
    src: '../assets/suyoung_main.jpg',
    instaAc: 'swimee',
  },
  {
    name: '권기은',
    src: '../assets/kieun_main.jpeg',
    instaAc: 'rlo_il.98',
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
    instaAc: 'c.glory_',
  },
  {
    name: '앙혜지',
    src: '../assets/hyeji_main.jpeg',
    instaAc: '__hye_z_',
  },
];

export default function Artist() {
  return (
    <SlideBox Name="Artist">
      {artistProfile.map((item, index) => (
        <ProfileTiles key={index}>
          <div>
            <img src={item.src} alt={item.name} />
            <p> {item.name} </p>
            <a href={`https://instagram.com/${item.instaAc}`} target="_blank">
              @{item.instaAc}
            </a>
          </div>
        </ProfileTiles>
      ))}
    </SlideBox>
  );
}
