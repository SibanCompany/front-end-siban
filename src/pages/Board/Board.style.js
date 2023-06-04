import styled from 'styled-components';

export const Community = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  width: 100%;
  height: 600px;
  text-align: center;
`;

export const NoticeContainer = styled.section`
  height: 100%;
`;

export const NoticeHeader = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 0px auto 0px 30px;
  padding: 20px 0;
  font-size: 1rem;
  border-bottom: 1px solid #d5d5d5;

  @media only screen and (max-width: 480px) {
    width: 90%;
    margin: 50px auto 0;
    font-size: 0.8rem;
  }
`;
export const NoticeIndex = styled.li`
  flex: ${({ flex }) => flex};
`;

// @media only screen and (max-width: 480px) {
//   font-size: 1rem;
//   width: 90%;
//   margin: 0 auto;
//   & ul {
//     width: 100%;
//     margin: 0 auto;
//   }
//   & .notice__list {
//     font-size: 0.6rem;
//   }
//   & ul li:nth-child(1) {
//     width: 10%;
//   }
//   & ul li:nth-child(2) {
//     width: 20%;
//   }
// }
