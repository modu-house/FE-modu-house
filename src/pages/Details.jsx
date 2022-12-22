import React from 'react';
import MainPageTemplate from '../components/main/MainPageTemplate';
import Detail from '../components/details/Detail';
import CommentInput from '../components/details/CommentInput';
import CommentList from '../components/details/CommentList';

function Details() {
  return (
    <MainPageTemplate>
      <Detail></Detail>
      <CommentInput></CommentInput>
      <CommentList></CommentList>
    </MainPageTemplate>
  );
}

export default Details;
