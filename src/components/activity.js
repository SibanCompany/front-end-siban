import React from 'react';
import styled from 'styled-components';
import SlideBox from './slideBox';

const ActivityTiles = styled.li`
  width: 300px;
  height: 360px;
  margin-bottom: 10px;
  & div,
  img {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
  & > div > img {
    background-size: cover;
  }
  :not(last-child) {
    margin-right: 20px;
  }
  & h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
  }
  & p:first-child {
    font-size: 1rem;
    padding: 10px 0;
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
    & h2 {
      font-size: 1rem;
      font-weight: bold;
      margin: 10px 0;
    }
    & p:first-child {
      font-size: 0.7rem;
      padding: 10px 0;
    }
  }
`;

const activityItems = [
  {
    title: 'D : DAY (메카네 소극장)',
    brief: '2023년 7월 1일 ~ 7월 2일',
    src: '../assets/d-day-2023-07.jpg',
    schedule: true,
  },
  {
    title: 'D : DAY (스튜디오SK)',
    brief: '2022년 12월 27일 ~ 1월 1일',
    src: '../assets/dday-poster-1.jpeg',
    schedule: false,
  },
  {
    title: '그대 내곁에 (강릉)',
    brief: '2022년 5월 14일 ~ 15일',
    src: '../assets/siban_activity_Gangneung.jpg',
    schedule: false,
  },
  {
    title: '그대 내곁에 (서울)',
    brief: '2021년 12월 21일 ~ 26일',
    src: '../assets/act_1.jpg',
    schedule: false,
  },
  {
    title: '끝맺음 (prod. 임석원) - 김홍준',
    brief: '뮤직비디오',
    src: '../assets/act_2.jpg',
    schedule: false,
  },
  {
    title: '월드 2인극 페스티벌',
    brief: '2인극',
    src: '../assets/act_3.gif',
    schedule: false,
  },
];
function Activity() {
  return (
    <SlideBox Name="Activity">
      {activityItems.map((item, index) => (
        <ActivityTiles key={index}>
          <div>
            <p
              style={
                item.schedule
                  ? { fontWeight: 'bold' }
                  : { fontWeight: 'regular', color: '#b2b2b2' }
              }
            >
              {item.brief}
              <span
                style={
                  item.schedule
                    ? { color: 'red', fontSize: '.8rem' }
                    : { color: 'inherit' }
                }
              >
                {item.schedule ? ' [공연 예정]' : ' [종료]'}
              </span>
            </p>
            <img src={item.src} alt={item.title} title="이동" />
            <h2> {item.title} </h2>
          </div>
        </ActivityTiles>
      ))}
    </SlideBox>
  );
}

export default Activity;
