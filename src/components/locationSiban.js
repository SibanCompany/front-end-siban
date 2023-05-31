import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InnerBox from './Inner';
import TitleBox from './titleBox';

import {
  faBuildingUser,
  faSquareParking,
  faPeopleGroup,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LocationSiban({ ...rest }) {
  const { kakao } = window;

  const HomeLocation = styled.section`
    margin-bottom: 50px;
    text-align: center;
    }
  `;

  const MapWrapper = styled.div`
    margin: 50px auto;
    width: 860px;
    height: 100%;
    @media only screen and (max-width: 480px) {
      width: 90%;
    }
  `;
  const KakaoMap = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 5px;
    @media only screen and (max-width: 480px) {
      height: 250px;
    }
  `;
  const MapInfo = styled.div`
    width: 100%;
    & > #info-header {
      padding: 50px 0px;
      display: flex;
      align-items: end;
      justify-content: space-between;
      border-bottom: 1px solid #e2e2e2;
    }

    & > #info-header > #info-group > p {
      margin-bottom: 10px;
      font-size: 1rem;
      text-align: start;
    }

    & > #info-header > #info-group > h2 {
      font-size: 1.7rem;
      font-weight: bold;
    }

    & > #info-header > #btn-group {
      width: 30%;
      display: flex;
      align-items: center;
    }

    & > #info-header > #btn-group > a {
      width: 50%;
      border: none;
      outline: none;
      background: #e2e2e2;
      border-radius: 5px;
      padding: 0.75rem;
      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, 0.25);
      }
    }
    & > #info-header > #btn-group > a:first-child {
      margin-right: 20px;
    }
    & > #info-header > div:last-child > a {
      font-weight: bold;
      font-size: 1em;
    }

    & > #detail-wrapper {
      display: flex;
      justify-content: space-between;
    }
    & > #detail-wrapper > ul:first-child {
      width: 30%;
      font-size: 1.2rem;
    }
    & > #detail-wrapper > ul > li {
      padding: 30px 20px;
      border-bottom: 1px solid #e2e2e2;
      font-size: 1em;
      height: 10%;
    }
    & > #detail-wrapper > ul:first-child > li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > #detail-wrapper > ul:first-child > li > i {
      margin-right: 5px;
    }
    & > #detail-wrapper > ul:last-child > li:first-child {
      display: flex;
      align-items: center;
      text-align: start;
    }
    & > #detail-wrapper > ul:last-child > li > span {
      background: #fdc81d;
      color: #fff;
      padding: 2px;
      margin-right: 5px;
      border-radius: 14px;
    }
    & > #detail-wrapper > ul:last-child > li:nth-child(2) a:hover {
      text-decoration: underline;
      color: #d6d6d6;
    }
    & > #detail-wrapper > ul:last-child > li:nth-child(2),
    & > #detail-wrapper > ul:last-child > li:nth-child(3) {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    & > #detail-wrapper > ul:last-child > li:nth-child(3) p {
      margin-top: 10px;
    }
    @media only screen and (max-width: 480px) {
      & > #info-header {
        padding: 30px 0px;
      }
      & > #info-header > #info-group {
        width: 50%;
        margin-right: 25px;
      }
      & > #info-header > #info-group > p {
        margin-bottom: 10px;
        font-size: 0.5rem;
        text-align: start;
      }

      & > #info-header > #info-group > h2 {
        font-size: 1rem;
        font-weight: bold;
      }
      & > #info-header > #btn-group {
        width: 50%;
        display: flex;
        align-items: center;
      }
      & > #info-header > #btn-group > a {
        font-size: 0.7rem;
      }
      & > #detail-wrapper > ul:first-child {
        width: 40%;
        font-size: 0.7rem;
      }
      & > #detail-wrapper > ul > li {
        padding: 30px 0;
        font-size: 0.8rem;
        height: 20%;
      }
      & > #detail-wrapper > ul:last-child > li {
        padding: 30px 10px;
        font-size: 0.7rem;
      }
      & > #detail-wrapper > ul:last-child > li > span {
        font-size: 0.7rem;
        border-radius: 8px;
      }
    }
  `;
  const kakaoMap = () => {
    const sibanLocation = document.querySelector('#map');
    const options = {
      center: new kakao.maps.LatLng(37.251075, 126.982791),
      level: 3,
    };

    const markerPosition = options.center;
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    const map = new kakao.maps.Map(sibanLocation, options);
    marker.setMap(map);
  };

  useEffect(() => {
    kakaoMap();
  }, []);

  return (
    <HomeLocation
      style={
        window.innerWidth < 480 && window.location.pathname === '/location'
          ? { padding: '0 0 50px 0' }
          : { padding: '100px 0' }
      }
    >
      <InnerBox height={'auto'}>
        <TitleBox
          style={
            window.innerWidth < 480 && window.location.pathname === '/location'
              ? {
                  borderBottom: 'none',
                  width: '90%',
                }
              : {}
          }
        >
          <h1
            style={
              window.innerWidth < 480 &&
              window.location.pathname === '/location'
                ? {
                    maxWidth: 'none',
                    width: '100%',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    textAlign: 'start',
                    padding: '30px 0 5px 0',
                    height: 'auto',
                    borderBottom: '1px solid #e5e5e5',
                  }
                : {}
            }
          >
            [시: 반] 오시는 길
          </h1>

          <p>
            <Link
              to="/location"
              style={
                window.location.pathname === '/location'
                  ? { display: 'none' }
                  : { display: 'block' }
              }
            >
              자세히 보기
            </Link>
          </p>
        </TitleBox>
        <MapWrapper>
          <KakaoMap id="map"></KakaoMap>
          <MapInfo>
            <div id="info-header">
              <div id="info-group">
                <p> [시반컴퍼니] </p>
                <h2> 경기도 수원시 권선구 매송고색로 716 4층 </h2>
              </div>
              <div id="btn-group">
                <a
                  href="https://map.naver.com/v5/directions/-/14135659.667024497,4474167.509663364,%EC%8B%9C%EB%B0%98%EC%BB%B4%ED%8D%BC%EB%8B%88,1689667368,PLACE_POI/-/transit?c=14135509.1853368,4474055.2384160,16,0,0,0,dh"
                  target="_blank"
                  rel="noreferrer"
                >
                  길찾기
                </a>
                <a
                  href="https://map.naver.com/v5/entry/place/1689667368?c=14135509.1853368,4474055.2384160,16,0,0,0,dh&placePath=%2Fhome%3Fentry=plt"
                  target="_blank"
                  rel="noreferrer"
                >
                  지 도
                </a>
              </div>
            </div>
            <div id="detail-wrapper">
              <ul>
                <li>
                  <i className="ri-map-pin-line"></i> 오시는 길
                </li>
                <li>
                  <i className="ri-question-line"></i> 문의하기
                </li>
                <li>
                  <i className="ri-error-warning-line"></i> 이용안내
                </li>
              </ul>
              <ul>
                <li>
                  <span> 수인분당 </span>
                  고색역 3번 출구에서 285m (고색역 3번 출구에서 우측으로 나와
                  도보로 4분 소요)
                </li>
                <li>
                  <a href="tel:010-6454-9756"> 010-6454-9756 </a>
                  <a href="mailto:cyg110@naver.com"> cyg110@naver.com </a>
                </li>
                {/* ul태그 > id 추가 or 다른 styled tag로 교체 */}
                <li>
                  <li>
                    <FontAwesomeIcon
                      icon={faBuildingUser}
                      size="2x"
                      style={{ color: 'a2a2a2' }}
                    />
                    <p>연습실 대관</p>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faPeopleGroup}
                      size="2x"
                      style={{ color: 'a2a2a2' }}
                    />
                    <p>레슨 상담</p>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faSquareParking}
                      size="2x"
                      style={{ color: 'a2a2a2' }}
                    />
                    <p>주차장</p>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      size="2x"
                      style={{ color: 'a2a2a2' }}
                    />
                    <p>예정 공연</p>
                  </li>
                </li>
              </ul>
            </div>
          </MapInfo>
        </MapWrapper>
      </InnerBox>
    </HomeLocation>
  );
}

export default LocationSiban;
