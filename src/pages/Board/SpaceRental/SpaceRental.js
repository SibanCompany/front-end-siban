import React from 'react';
import * as S from './SpaceRental.style';

const SpaceRental = () => {
  return (
    <S.RentalContainer>
      <S.LinkedPage
        onClick={() => {
          window.location.href = 'https://www.spacecloud.kr/space/51779';
        }}
      >
        대관문의는 여길 클릭하세요
      </S.LinkedPage>
    </S.RentalContainer>
  );
};

export default SpaceRental;
