import React, { Fragment } from 'react';
import Activity from '../components/activity';
import Artist from '../components/artists';
import Siban from '../components/siban';
import LocationSiban from '../components/locationSiban';
import Intro from '../components/introduce';
import SideButton from '../components/button/sideBtn';

function Home() {
  return (
    <Fragment>
      <Siban />
      <Artist />
      <Activity />
      <Intro />
      <LocationSiban />
      <SideButton />
    </Fragment>
  );
}

export default Home;
