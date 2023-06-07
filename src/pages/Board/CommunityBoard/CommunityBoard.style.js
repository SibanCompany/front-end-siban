import styled from 'styled-components';

export const BoardWrapper = styled.ul`
  width: 80%;
  margin: 0px auto 0px 30px;
  padding: 20px 0;
  font-size: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey_1};

  &:hover {
    background-color: ${({ theme }) => theme.color.grey_1};
  }

  @media only screen and (max-width: 480px) {
    margin: 0 auto;
    width: 90%;
  }
  ${({ theme }) => theme.flex.optional('row', 'space-around', 'center')}
`;

export const BoardItem = styled.li`
  flex: ${({ flex }) => flex};
  @media only screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;
