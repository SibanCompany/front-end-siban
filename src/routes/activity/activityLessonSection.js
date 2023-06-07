import React from 'react';
import styled from 'styled-components';

function ActivityLessonSection() {
  return (
    <MainSection>
      <TextWrapper>
        다양한 [연기 연습 및 레슨] 모습으로 찾아뵙겠습니다.
      </TextWrapper>
    </MainSection>
  );
}

const MainSection = styled.section`
  width: 1200px;
  height: 100%;
  @media only screen and (max-width: 480px) {
    width: 90%;
    margin: auto;
    height: 100vh;
  }
`;
const TextWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 100px auto 0;
    font-size: 0.8rem;
  }
`;

export default ActivityLessonSection;
