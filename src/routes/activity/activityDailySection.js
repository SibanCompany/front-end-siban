import React from 'react';
import styled from 'styled-components';

function ActivityDailySection() {
  return (
    <MainSection>
      <TextWrapper>
        다양한 일상 모습으로 찾아뵙겠습니다.
        <p>
          <a href="https://www.instagram.com/siban.company/?utm_medium=copy_link">
            인스타그램으로 보기
          </a>
        </p>
      </TextWrapper>
    </MainSection>
  );
}

const MainSection = styled.section`
  width: 1200px;
  @media only screen and (max-width: 480px) {
    margin: 0 auto;
    width: 90%;
    height: 100vh;
  }
`;
const TextWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
  & > p {
    margin-top: 50px;
  }
  & > p > a:hover {
    color: rgba(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.8rem;
    height: 100%;
  }
`;

export default ActivityDailySection;
