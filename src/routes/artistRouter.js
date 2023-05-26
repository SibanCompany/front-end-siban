import React from 'react';
import styled from 'styled-components';
import ArtistMainSection from './artists/artistSection';
import HeaderForRouter from './RouterHeader';
import WrapperForRouter from './RouterWrapper';

function ArtistRouter() {
  return (
    <>
      <HeaderForRouter page={'[시: 반] 아티스트'} />
      <WrapperForRouter height={'auto'}>
        <ArtistMainSection />
      </WrapperForRouter>
    </>
  );
}

export default ArtistRouter;
