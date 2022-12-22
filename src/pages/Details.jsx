import React, { useState, useEffect } from 'react';
import MainPageTemplate from '../components/main/MainPageTemplate';
import Detail from '../components/details/Detail';
import CommentInput from '../components/details/CommentInput';
import CommentList from '../components/details/CommentList';
import postAPI from '../api/posts';
import { useParams } from 'react-router';

function Details() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    postAPI.getPostDetail(id).then((res) => {
      setDetail(res.data);
    });
  }, []);

  return (
    <MainPageTemplate>
      <Detail data={detail} />
      <CommentInput />
      <CommentList comments={detail?.commentList} />
    </MainPageTemplate>
  );
}

export default Details;
