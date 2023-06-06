import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Nav.style';

function Nav() {
  return (
    <S.NavContainer>
      <S.LogoWrapper>
        <Link to="/">
          <S.Logo src="/assets/main_logo_white.jpg" />
        </Link>
      </S.LogoWrapper>
      <S.NavWrapper>
        <S.SocialMediaWrapper>
          {SNS_LINK.map(({ id, name, url }) => (
            <S.SocialMedia key={id}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                <S.SocialIcon className={`ri-${name.toLowerCase()}-line`} />
                {name}
              </a>
            </S.SocialMedia>
          ))}
        </S.SocialMediaWrapper>
        <S.NavMenuWrapper>
          {NAVIGATION.map(({ id, name, url }) => (
            <S.NavMenu key={id}>
              <Link to={url}>{name}</Link>
            </S.NavMenu>
          ))}
        </S.NavMenuWrapper>
      </S.NavWrapper>
    </S.NavContainer>
  );
}

export default Nav;
const SNS_LINK = [
  {
    id: 1,
    name: 'Instagram',
    url: 'https://instagram.com/siban.company?utm_medium=copy_link',
  },
  {
    id: 2,
    name: 'Youtube',
    url: 'https://www.youtube.com/channel/UCLXAm23QnEYE_WNyjUK3qyQ/featured',
  },
];

const NAVIGATION = [
  { id: 1, name: 'SIBAN', url: '/siban' },
  { id: 2, name: 'ACTIVITY', url: '/activity' },
  { id: 3, name: 'ARTISTS', url: '/artists' },
  { id: 4, name: 'LOCATION', url: '/location' },
  { id: 5, name: 'BOARD', url: '/board' },
];
