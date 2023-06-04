import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivityMainSection from './activity/activityMainSection';
import ActivityVideoSection from './activity/activityVideoSection';
import ActivityLessonSection from './activity/activityLessonSection';
import ActivityDailySection from './activity/activityDailySection';
import HeaderForRouter from './RouterHeader';
import WrapperForRouter from './RouterWrapper';
import SideNavForRouter from './RouterSideNav';

function ActivityRouter() {
  const [renderSection, setRenderSection] = useState(<ActivityMainSection />);
  const [subTitle, setSubTitle] = useState('공연');
  const ActivityNavList = ['공연', '영상', '레슨', '일상'];
  const sectionList = [
    <ActivityMainSection />,
    <ActivityVideoSection />,
    <ActivityLessonSection />,
    <ActivityDailySection />,
  ];

  const changeRender = e => {
    const listId = parseInt(e.target.id);

    for (let i = 0; i < ActivityNavList.length; i++) {
      if (listId === i) {
        setRenderSection(sectionList[i]);
        setSubTitle(ActivityNavList[i]);
      }
    }
  };
  return (
    <>
      <HeaderForRouter page={`[시: 반] 일 상 - ${subTitle}`} />

      <WrapperForRouter height={'auto'}>
        <SideNavForRouter>
          <ul>
            {ActivityNavList.map((item, index) => (
              <Link to="" key={index}>
                <li id={index} onClick={changeRender}>
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </SideNavForRouter>
        {renderSection}
      </WrapperForRouter>
    </>
  );
}

export default ActivityRouter;
