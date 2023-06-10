import React from 'react';
import styled from 'styled-components';

function ActivityVideoSection() {
  return (
    <MainSection>
      <p> 좌우로 스크롤하여 영상을 볼 수 있습니다. </p>
      <VideoWrapper>
        {youtubeList.map((item, index) => (
          <VideoItem key={index}>
            <iframe
              title={item.title}
              width="300px"
              height="250px"
              src={item.src}
              frameBorder="0"
            />
          </VideoItem>
        ))}
      </VideoWrapper>
    </MainSection>
  );
}

const youtubeList = [
  {
    title: '[막내 다이어리 : 오늘은 사진찍는 날]',
    src: 'https://www.youtube.com/embed/Vo0Yj7YAtlc',
  },
  {
    title: '[막내 다이어리 : 막내 1의 하루]',
    src: 'https://www.youtube.com/embed/BjgSsvn6m8g',
  },
  {
    title: '[막내 다이어리 : 노는게 제일 좋아!]',
    src: 'https://www.youtube.com/embed/qfguZxCjYmc',
  },
  {
    title: '[막내 다이어리 : 연출의 눈물, 첫 리딩 Day]',
    src: 'https://www.youtube.com/embed/kS3zcArCeeY',
  },
  {
    title: '[막내 다이어리 : 연출과 조연출, 이대로 괜찮은가?]',
    src: 'https://www.youtube.com/embed/QdBwiBdbkCE',
  },
  {
    title: '[막내 다이어리 : 철부지 오빠들과 말괄량이 막내들]',
    src: 'https://www.youtube.com/embed/SfafGYe7eec',
  },
  {
    title: 'M/V',
    src: 'https://www.youtube.com/embed/qrNDKumU_tI',
  },
];

const MainSection = styled.section`
  width: 1200px;
  & > p {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
    margin: 0 auto;
    overflow: scroll;
    & > p {
      display: block;
      font-size: 0.7rem;
      text-align: center;
      color: #2b2b2b;
    }
  }
`;
const VideoWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 50px;
  display: grid;
  row-gap: 100px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 480px) {
    width: 1100px;
    margin: 0 auto;
  }
`;
const VideoItem = styled.div`
  width: 300px;
  height: 250px;
  margin: auto;
  @media only screen and (max-width: 480px) {
  }
`;

export default ActivityVideoSection;
