import React from 'react';
import LocationSiban from '../components/locationSiban';
import styled from 'styled-components';
const serviceImg = '../assets/corp_document_service.jpg';
const mailOrderImg = '../assets/corp_document_MOB.jpg';

const CorpsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto 0 auto;
  & > h2 {
    max-width: 860px;
    margin: 0 auto;
    font-size: 1.7rem;
    font-weight: bold;
  }
  & > p {
    max-width: 860px;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 1rem;
  }
  @media only screen and (max-width: 480px) {
    max-width: 90%;
    & > h2 {
      max-width: 100%;
      font-size: 1rem;
    }
    & > p {
      font-size: 0.7rem;
    }
  }
`;
const CorpsInfo = styled.div`
  max-width: 860px;
  margin: 0 auto 100px auto;
  padding: 0 0 20px 0;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid #e5e5e5;
  @media only screen and (max-width: 480px) {
    max-width: 100%;
    margin: 20px auto 50px auto;
    padding: 0;
    justify-content: space-around;
  }
`;

const ShowImg = styled.div`
  font-size: 1.2rem;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.4);
  }
  &:first-child {
    margin-right: 20px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

function LocationSibanRouter() {
  const ImgStyle = {
    width: '860px',
    padding: '50px',
    margin: '0 auto',
    cursor: 'pointer',
  };

  const SmallImgStyle = {
    width: '90%',
    margin: '0 auto 50px auto',
    cursor: 'pointer',
  };

  function createImg(src) {
    return `<img src=${src} alt="service">`;
  }

  function showDocu(e) {
    const id = e.target.id;
    const imgBox = document.querySelector('#image-box');

    if (id === 'service') {
      imgBox.innerHTML = createImg(serviceImg);
    } else {
      imgBox.innerHTML = createImg(mailOrderImg);
    }
  }

  return (
    <>
      <LocationSiban LocationRouter></LocationSiban>
      <CorpsWrapper>
        <h2> 사업자 정보 </h2>
        <p> 해당 항목을 클릭하시면 사업자등록증명을 확인할 수 있습니다. </p>
        <CorpsInfo>
          <ShowImg onClick={showDocu} id="service">
            서비스업
          </ShowImg>
          <ShowImg onClick={showDocu} id="mail-order">
            통신판매업
          </ShowImg>
        </CorpsInfo>
        <div
          onClick={e => {
            e.target.style.display = 'none';
          }}
          id="image-box"
          style={window.innerWidth < 480 ? SmallImgStyle : ImgStyle}
        ></div>
      </CorpsWrapper>
    </>
  );
}

export default LocationSibanRouter;
