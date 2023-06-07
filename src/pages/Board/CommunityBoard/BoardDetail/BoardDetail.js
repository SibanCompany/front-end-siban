import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const BoardDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { id } = useParams();
  return (
    <div>
      BoardDetail {id}
      <div>{searchParams.get('boardType')}</div>
    </div>
  );
};

export default BoardDetail;
