import React from 'react';
import styled from 'styled-components';

function MainTemplate({ children }) {
  return <Block>{children}</Block>;
}

const Block = styled.div`
  height: 100vh;
`;

export default MainTemplate;
