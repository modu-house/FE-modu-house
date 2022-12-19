import React from 'react';
import MainTemplate from './MainTemplate';
import TopBar from '../base/TopBar';
import MainResponsive from './MainResponsive';

function MainPageTemplate({ children }) {
  return (
    <MainTemplate>
      <MainResponsive>
        <TopBar />
        {children}
      </MainResponsive>
    </MainTemplate>
  );
}

export default MainPageTemplate;
