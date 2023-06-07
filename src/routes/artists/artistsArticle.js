import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArtistProfile = styled.article`
  width: 100%;
  height: 600px;
  display: flex;
  padding: 30px 80px;
  margin: 0 auto 100px auto;
  box-sizing: border-box;
  @media only screen and (max-width: 480px) {
    display: block;
    height: auto;
    width: 80%;
    padding: 0;
    margin: 30px auto;
  }
`;
const ImageBox = styled.div`
  width: 400px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    object-fit: contain;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-right: 0;
  }
`;
const DescBox = styled.div`
  width: 500px;
  display: flex;
  @media only screen and (max-width: 480px) {
    width: 95%;
    margin-top: 30px;
  }
`;
const LeftSide = styled.div`
  text-align: end;
  font-size: 1.1rem;
  font-weight: bold;
  margin-right: 20px;
  width: 30%;
  & li {
    margin: 15px 0;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
const RightSide = styled.div`
  font-size: 1.1rem;
  & li {
    margin: 15px 0;
  }
  & a:hover {
    color: rgba(0, 0, 0, 0.3);
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.9rem;
    flex: 1;
  }
`;

function ArtistArticle({
  imageUrl,
  height,
  firstGenre,
  secondGenre,
  thirdGenre,
  fourthGenre,
  awards,
  name,
  age,
  body,
  email,
  instagram,
  skill,
  rolePlay,
  shortCut,
  secondGenreList,
  thirdGenreList,
  fourthGenreList,
  awardsList,
}) {
  return (
    <ArtistProfile>
      <ImageBox>
        <img src={imageUrl} alt="profile" />
      </ImageBox>
      <DescBox>
        <LeftSide>
          <ul>
            <li> 이름 </li>
            <li> 생년월일 </li>
            <li> 키/몸무게 </li>
            <li> 이메일 </li>
            <li> 인스타그램 </li>
            <li> 특기 </li>
            <li> [대표작품] </li>
            <li style={{ height }}> 연극 </li>
            <li style={{ height: `${shortCut.length * 30}px` }}>
              {firstGenre}
            </li>
            <li> {secondGenre} </li>
            <li> {thirdGenre} </li>
            <li> {fourthGenre} </li>
            <li> {awards} </li>
          </ul>
        </LeftSide>
        <RightSide>
          <ul>
            <li> {name} </li>
            <li> {age} </li>
            <li> {body} </li>
            <li> {email} </li>
            <li>
              <a
                href={`https://instagram.com/${instagram}_?utm_medium=copy_link`}
                target="_blank"
                rel="noreferrer"
              >
                {instagram}
              </a>
            </li>
            <li> {skill} </li>
            <li> &nbsp; </li>
            <ul style={{ height }}>
              {rolePlay.map((item, index) => (
                <li key={index}> {item} </li>
              ))}
            </ul>
            <ul style={{ height: `${shortCut.length * 30}px` }}>
              {shortCut.map((item, index) => (
                <li key={index}> {item} </li>
              ))}
            </ul>
            <li> {secondGenreList} </li>
            <li> {thirdGenreList} </li>
            <li> {fourthGenreList} </li>
            <ul>
              {awardsList.map((item, index) => (
                <li key={index}> {item} </li>
              ))}
            </ul>
          </ul>
        </RightSide>
      </DescBox>
    </ArtistProfile>
  );
}
ArtistArticle.defaultProps = {
  imageUrl: '',
  firstGenre: '',
  secondGenre: '',
  thirdGenre: '',
  fourthGenre: '',
  awards: '',
  name: '배우 이름',
  age: '생년 월일',
  body: '키 / 몸무게',
  email: '이메일 주소',
  instagram: '인스타그램 아이디',
  skill: '장점 및 특기',
  rolePlay: [],
  shortCut: [],
  secondGenreList: '',
  thirdGenreList: '',
  fourthGenreList: '',
  awardsList: [],
};
ArtistArticle.propTypes = {
  rolePlay: PropTypes.arrayOf(PropTypes.string).isRequired,
  shortCut: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ArtistArticle;
