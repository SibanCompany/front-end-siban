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
    title: 'M/V',
    src: 'https://www.youtube.com/embed/qrNDKumU_tI',
  },
  {
    title: 'contest_exhibit_1',
    src: 'https://www.youtube.com/embed/3JbMuLViC6g',
  },
  {
    title: 'contest_exhibit_2',
    src: 'https://www.youtube.com/embed/UUsTatIVcnY',
  },
  {
    title: 'contest_exhibit_3',
    src: 'https://www.youtube.com/embed/L78uwhMhgXg',
  },
  {
    title: 'contest_exhibit_4',
    src: 'https://www.youtube.com/embed/v8zanX6DLZU',
  },
  {
    title: 'contest_exhibit_5',
    src: 'https://www.youtube.com/embed/ESmefPaQesQ',
  },
  {
    title: 'contest_exhibit_6',
    src: 'https://www.youtube.com/embed/C2AB0qtZJ1I',
  },
  {
    title: 'contest_exhibit_7',
    src: 'https://www.youtube.com/embed/M9JWm1pf43A',
  },
  {
    title: 'contest_exhibit_8',
    src: 'https://www.youtube.com/embed/lINNxua1RPE',
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
