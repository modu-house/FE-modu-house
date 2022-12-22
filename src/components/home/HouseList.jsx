import React from 'react';

import styled from 'styled-components';
import House from './House';

function HouseList({ posts }) {
  return (
    <StHouseList>
      {posts && posts.map((post) => <House key={post.id} post={post} />)}
    </StHouseList>
  );
}

const StHouseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
  grid-gap: 50px;
  justify-content: center;
  width: 80%;
  height: 100%;
  padding: 40px 0 40px 0;
  margin: 0 auto;
`;

export default HouseList;
