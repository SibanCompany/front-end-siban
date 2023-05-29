import React, { useState } from 'react';
import styled from 'styled-components';

const BasicInfo = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 30px auto 0 auto;
  }
`;
const PosterBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 300px;
  }
  @media only screen and (max-width: 480px) {
    width: 120px;
    & > img {
      width: 100%;
    }
  }
`;
const DescriptionBox = styled.div`
  flex: 1;
  display: flex;
`;
const ButtonBox = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  & > a {
    width: 35%;
    text-align: center;
    font-size: 1.2rem;
    background: white;
    padding: 10px 15px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.1);
  }
  & > a:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    & > a {
      width: auto;
      text-align: center;
      font-size: 0.7rem;
      margin-bottom: 20px;
    }
  }
`;
const LeftList = styled.ul`
  width: 10%;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: end;
  margin-right: 20px;

  & > li {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
    width: 15%;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const RightList = styled.ul`
  flex: 1;
  font-size: 1.2rem;
  & > li {
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
const PosterSub = styled.div`
  width: 100%;
  margin-top: 100px;
  & > img {
    width: 800px;
    margin: 0 auto;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 30px;
    & > img {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

function ActivityMainSection() {
  const [overflow, setOverflow] = useState('hidden');
  const [height, setHeight] = useState('1000px');
  const [gradient, setGradient] = useState(
    'linear-gradient(to top, #fff 7%, rgba(0, 0, 0, 0.05))'
  );
  const [text, setText] = useState('자세히 보기');

  const showPoster = () => {
    if (overflow === 'hidden') {
      setOverflow('none');
      setHeight('auto');
      setGradient('transparent');
      setText('닫기');
    } else {
      setOverflow('hidden');
      setHeight('1000px');
      setGradient('linear-gradient(to top, #fff 10%, rgba(0, 0, 0, 0.05))');
      setText('자세히 보기');
    }
  };

  const MainSection = styled.section`
    width: 1200px;
    height: ${height};
    overflow: ${overflow};
    position: relative;
    @media only screen and (max-width: 480px) {
      width: 90%;
      margin: 0 auto;
    }
  `;
  const MoreInfoBtnBox = styled.div`
    width: 800px;
    height: 400px;
    background: ${gradient};
    z-index: 5;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
      position: absolute;
      bottom: 10px;
      z-index: 10;
      background: rgba(0, 0, 0, 0.1);
      font-weight: bold;
      padding: 12px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
    & > span:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    @media only screen and (max-width: 480px) {
      width: 100%;
      height: 200px;
      & > span {
        font-size: 0.7rem;
      }
    }
  `;
  return (
    <MainSection className="activitiy--main--section">
      <BasicInfo>
        <PosterBox>
          <img src="../assets/dday-poster-1.jpeg" alt="main-poster" />
        </PosterBox>
        <DescriptionBox>
          <LeftList>
            <li> 제목 </li>
            <li> 장르 </li>
            <li> 기간 </li>
            <li style={{ height: '50px' }}> 시간 </li>
            <li style={{ height: '55px' }}> 장소 </li>
            <li> 줄거리 </li>
          </LeftList>
          <RightList>
            <li>
              D : DAY (디 : 데이){' '}
              <span style={{ color: '#d2d2d2' }}> [공연 종료] </span>
            </li>
            <li> 드라마극 (75분) </li>
            <li> 2022.12.27.(화) ~ 2023.01.01.(일) </li>
            <ul
              className="right-list--time"
              style={{ height: '50px', marginBottom: '20px' }}
            >
              <li style={{ marginBottom: '10px' }}> 화 ~ 금 19시 30분</li>
              <li> 토, 일 15시 </li>
            </ul>
            <ul
              className="right-list--place"
              style={{ height: '50px', marginBottom: '20px' }}
            >
              <li style={{ marginBottom: '10px' }}>스튜디오SK</li>
              <li>서울특별시 종로구 명륜3가 122-2</li>
            </ul>
            <li>
              <p style={{ lineHeight: '1.7rem' }}>
                다섯 명의 사람들이 자살 채팅방을 통해 한 옥상에 모이게 된다.
                그러나 죽음 앞에서 두려움을 느낀 그들은 자살시도에 머뭇거리게
                된다. 이에 이 모임은 새로운 국면을 맞이하게 되는데..
              </p>
            </li>
            <li>
              <ButtonBox>
                <a
                  href="https://booking.naver.com/booking/5/bizes/817380"
                  target="_blank"
                  rel="noreferrer"
                >
                  네이버 예약
                </a>
                <a
                  href="https://map.naver.com/v5/entry/place/37232850?c=14136789.7661805,4520812.9856529,15,0,0,0,dh"
                  target="_blank"
                  rel="noreferrer"
                >
                  공연장 위치
                </a>
              </ButtonBox>
            </li>
          </RightList>
        </DescriptionBox>
      </BasicInfo>
      <PosterSub>
        <img src="../assets/dday-whole.jpeg" alt="sub-poster" />
      </PosterSub>
      <MoreInfoBtnBox>
        <span onClick={showPoster}> {text} </span>
      </MoreInfoBtnBox>
    </MainSection>
  );
}

export default ActivityMainSection;
