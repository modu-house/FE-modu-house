import React from 'react';
import MainPageTemplate from '../components/main/MainPageTemplate';
import axios from 'axios';

function Home() {
  // 테스트 코드
  axios.get('/todos').then((res) => {
    console.log(res.data);
  });
  return <MainPageTemplate>Home</MainPageTemplate>;
}

export default Home;
