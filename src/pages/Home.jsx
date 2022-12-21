import React from 'react';
import MainPageTemplate from '../components/main/MainPageTemplate';
import MainSlider from '../components/home/MainSlider';
import LocalsBox from '../components/home/LocalsBox';

function Home() {
  return (
    <MainPageTemplate>
      <LocalsBox />
      <MainSlider />
    </MainPageTemplate>
  );
}

export default Home;
