import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  faImagePortrait,
  faComment,
  faIcons,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BtnGroup = styled.div`
  position: fixed;
  right: 3%;
  bottom: 10%;
  z-index: 5;
  display: flex;
  flex-direction: column;

  & #visible {
    display: none;
  }
`;
const Button = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  margin: 10px;
  border-radius: 50%;
  background: #a9abb0;
  color: #fff;
  cursor: pointer;
  box-shadow: 3px 4px 10px 2px rgb(0 0 0 / 0.2);
  transition: 0.4s ease;
  text-align: center;

  &:hover {
    transform: scale(calc(1.1));
    border-radius: 30px;
  }
  @media only screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
    & > svg {
      width: 15px;
    }
    &:hover {
      transform: none;
      border-radius: none;
    }
  }
`;

function SideButton() {
  let scroll_position = 0;
  let working = false;

  const [scrolling, setScrolling] = useState(false);

  const scrollView = last_scroll_position => {
    if (last_scroll_position >= 220) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener('scroll', e => {
    scroll_position = window.scrollY;

    if (!working) {
      scrollView(scroll_position);
      working = false;
      working = true;
    }
  });

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <BtnGroup
      id="visible"
      style={
        scrolling
          ? { display: 'flex', transition: '0.4s' }
          : { display: 'none' }
      }
    >
      <Link to="/artists">
        <Button title="아티스트">
          <FontAwesomeIcon icon={faImagePortrait} size="2x" />
        </Button>
      </Link>
      <Link to="/activity">
        <Button>
          <FontAwesomeIcon icon={faIcons} size="2x" />
        </Button>
      </Link>
      <Link to="/connection">
        <Button>
          <FontAwesomeIcon icon={faComment} size="2x" />
        </Button>
      </Link>
      <Button
        onClick={moveToTop}
        style={
          window.innerWidth > 480
            ? { fontWeight: 'bold', fontSize: '1rem' }
            : { fontWeight: 'bold', fontSize: '.8rem' }
        }
      >
        Top
      </Button>
    </BtnGroup>
  );
}

export default SideButton;
