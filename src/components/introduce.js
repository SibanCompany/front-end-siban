import React from 'react';
import styled from 'styled-components';
import InnerBox from './Inner';
import TitleBox from './titleBox';

const IntroBox = styled.section`
  padding: 100px 0 250px 0;
  text-align: center;
  @media only screen and (max-width: 480px) {
    padding: 100px 0 0 0;
  }
`;

const VideoBox = styled.div`
  max-width: 860px;
  margin: 50px auto;
  @media only screen and (max-width: 480px) {
    max-width: 90%;
  }
`;
const VideoRatio = styled.div`
  height: 0;
  padding-top: 56.25%;
  position: relative;
  & > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
function Intro() {
  return (
    <IntroBox>
      <InnerBox height={'400px'}>
        <TitleBox introduce>
          <h1> [시: 반] 일상 공유 </h1>
          <p>
            <a
              href="https://www.youtube.com/channel/UCLXAm23QnEYE_WNyjUK3qyQ/featured"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </p>
        </TitleBox>
        <VideoBox>
          <VideoRatio>
            <iframe
              title="Siban Youtube"
              width="640"
              hegiht="360"
              src="https://www.youtube.com/embed/qrNDKumU_tI"
              frameBorder="0"
            ></iframe>
          </VideoRatio>
        </VideoBox>
      </InnerBox>
    </IntroBox>
  );
}

export default Intro;
