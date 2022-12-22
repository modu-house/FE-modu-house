import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import HouseTooltip from './HouseTooltip';

const House = ({ post }) => {
  return (
    <HouseTooltip post={post}>
      <StHouse>
        <Link to={`/details/${post.id}`}>
          <FontAwesomeIcon icon={faHouseChimney} className="house-icon" />
        </Link>
      </StHouse>
    </HouseTooltip>
  );
};

const StHouse = styled.div`
  text-align: center;

  .house-icon {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export default House;
