import styled from 'styled-components';

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  padding: 0 120px;
  border-bottom: 0.5px solid ${({ theme }) => theme.color.balck};
  @media only screen and (max-width: 480px) {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-items: center;
    height: 150px;
  }
`;
export const LogoWrapper = styled.div`
  width: 200px;
  height: 200px;
  @media only screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
    overflow: hidden;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 24px;
  }
`;
export const Logo = styled.img`
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

export const NavWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  font-size: 19px;
  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: 150px;
  }
`;

export const SocialMediaWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const SocialMedia = styled.li`
  font-size: 16px;
  font-weight: 700;
  &:nth-child(2) {
    margin: 0 20px 0 50px;
  }
  &:hover {
    color: ${({ theme }) => theme.color.grey_3};
  }
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    &:first-child {
      margin-right: 0 20px 0 0;
    }
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.color.grey_3};
    }
  }
`;

export const SocialIcon = styled.i`
  font-size: 16px;
  margin-right: 5px;
  @media only screen and (max-width: 480px) {
    font-size: 11px;
    margin-right: 5px;
  }
`;
export const NavMenuWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 19px;
  font-weight: 700;
  @media only screen and (max-width: 480px) {
    display: flex;
    justify-content: space-around;
    font-size: 11px;
    font-weight: 700;
  }
`;
export const NavMenu = styled.li`
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.grey_3};
  }
  @media only screen and (max-width: 480px) {
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.color.grey_3};
    }
  }
`;
