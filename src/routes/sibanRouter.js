import React from 'react';
import styled from 'styled-components';

const MainSiban = styled.div`
  padding: 100px 0;
  background: linear-gradient(
    to bottom,
    #000000,
    #0c0c0c,
    #1c1c1c,
    #0c0c0c,
    #000000
  );
  color: #ffffff;
  text-align: center;
  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;
const ImageBox = styled.div`
  width: 50%;
  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const SlogunBox = styled.div`
  max-width: 1200px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 480px) {
    max-width: 90%;
    height: auto;
    display: block;
  }
`;

const ImgBox = styled.div`
  width: 750px;
  & > img {
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    & > img {
      margin: 30px auto;
      width: 90%;
    }
  }
`;
const TextBox = styled.div`
  flex: 1;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > h2 {
    font-size: 2rem;
    margin-bottom: 50px;
  }
  & > p {
    font-size: 1.15rem;
    white-space: pre-wrap;
    line-height: 50px;
  }
  @media only screen and (max-width: 480px) {
    flex: none;
    margin: 0 auto;
    height: auto;
    & > h2 {
      font-size: 1rem;
      margin-bottom: 20px;
    }
    & > p {
      font-size: 0.7rem;
      line-height: 30px;
    }
  }
`;

const sibanIntroList = [
  {
    id: 'slogun_1',
    src: '../assets/slogun.jpg',
    title: '[시: 반]',
    desc: `시작이 반이다.\nWell Begun, is Half Done`,
  },
  {
    id: 'slogun_2',
    src: '../assets/slogun2.jpg',
    title: '시작이 반이다',
    desc: `시작함에 있어 실패를 두려워하지 않고\n담대히 나아가는 우리의 모습을\n보여드리겠습니다.`,
  },
  {
    id: 'slogun_3',
    src: '../assets/slogun3.jpg',
    title: '남녀노소의 평범한 이야기',
    desc: `평범한 사람들이 모여\n평범한 일상을 예술로 표현합니다.\n남녀노소 누구나 공감하고 즐길 수 있는\n우리들의 작품을 만들어 나아갑니다.`,
  },
  {
    id: 'slogun_4',
    src: '../assets/slogun5.jpg',
    title: '선한 영향력',
    desc: `좋은 사람들과\n선한 영향력을 나눌 수 있는\n좋은 작품으로 다가가겠습니다.`,
  },
];

function SibanRouter() {
  return (
    <div>
      <MainSiban>
        <ImageBox>
          <img src="../assets/about-siban.jpeg" alt="" />
        </ImageBox>
        {/* {sibanIntroList.map((list, index) => (
          <SlogunBox
            key={index}
            style={
              index % 2 === 0
                ? { textAlign: "start" }
                : { textAlign: "end", flexDirection: "row-reverse" }
            }
          >
            <ImgBox>
              <img src={list.src} alt={list.id} />
            </ImgBox>
            <TextBox
              style={
                index % 2 === 0
                  ? { paddingLeft: "20px" }
                  : { paddingRight: "20px" }
              }
            >
              <h2> {list.title} </h2>
              <p>{list.desc}</p>
            </TextBox>
          </SlogunBox>
        ))} */}
      </MainSiban>
    </div>
  );
}

export default SibanRouter;
