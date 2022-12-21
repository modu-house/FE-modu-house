import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function HouseList() {
  return (
    <HouseBox>
      <House>
        <Link to="/details/1">
          <FontAwesomeIcon icon={faHouseChimney} className="house" />
        </Link>
      </House>
      <House>
        <Link to="/details/2">
          <FontAwesomeIcon icon={faHouseChimney} className="house" />
        </Link>
      </House>
      <House>
        <Link to="/details/3">
          <FontAwesomeIcon icon={faHouseChimney} className="house" />
        </Link>
      </House>
    </HouseBox>
  );
}

const HouseBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 130px));
  grid-gap: 20px;
  justify-content: center;
  width: 80%;
  padding: 40px 0 40px 0;
  margin: 0 auto;
`;

const House = styled.div`
  text-align: center;

  .house {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export default HouseList;
