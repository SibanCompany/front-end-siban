import styled from 'styled-components';

export const RentalContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    height: 30%;
  }
`;

export const LinkedPage = styled.button`
  padding: 15px 30px;
  border-radius: 50px;
  border: 0;
  box-shadow: ${({ theme }) => theme.color.grey_2} 0 0 8px;
  background-color: white;
  font-size: 15px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.5s ease;

  &:hover {
    letter-spacing: 3px;
    background-color: ${({ theme }) => theme.color.grey_1};
    color: ${({ theme }) => theme.color.white};
    font-weight: 700;
    box-shadow: ${({ theme }) => theme.color.grey_1} 0px 7px 29px 0px;
    cursor: pointer;
    transform: scale(103%);
  }
  &:active {
    letter-spacing: 3px;
    background-color: ${({ theme }) => theme.color.grey_3};
    color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.color.grey_1} 0px 0px 0px 0px;
  }
  @media only screen and (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.6em;
  }
`;
