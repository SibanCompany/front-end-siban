import React, { useEffect, useState } from 'react';
import * as S from './CommunityBoard.style';

const CommunityBoard = ({ menuLink }) => {
  const [board, setBoard] = useState([]);

  const link = `/mockData/board/${menuLink}.json`;

  const getNotice = async () => {
    const response = await fetch(link);
    const json = await response.json();
    setBoard(json.data);
  };

  useEffect(() => {
    getNotice();
  }, [menuLink]);

  return (
    <span>
      {board?.map(({ id, title, createdAt, user }) => {
        return (
          <S.BoardWrapper key={id}>
            <S.BoardItem flex="1">{id}</S.BoardItem>
            <S.BoardItem flex="2">{createdAt}</S.BoardItem>
            <S.BoardItem flex="5">{title}</S.BoardItem>
            <S.BoardItem flex="2">{user.name}</S.BoardItem>
          </S.BoardWrapper>
        );
      })}
    </span>
  );
};

export default CommunityBoard;
