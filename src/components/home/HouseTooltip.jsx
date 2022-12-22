import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { elapsedTime } from '../../utils/time';

const HouseTooltip = ({ children, post }) => {
  return (
    <Container>
      {children}
      <Content className="tooltip">
        <StTitle>{post.title}</StTitle>
        {post.image && (
          <StImg>
            <img className="image" src={post.image[0]} alt="image" />
          </StImg>
        )}
        <StInfo>
          <div className="infoBox">
            <Info className="user">
              <FontAwesomeIcon size="xs" icon={faUser} className="infoIcon" />
              {post.username}
            </Info>
            <Info className="likes">
              <FontAwesomeIcon size="xs" icon={faHeart} className="infoIcon" />
              {post.boardLike}
            </Info>
            <Info className="comments">
              <FontAwesomeIcon
                size="xs"
                icon={faCommentDots}
                className="infoIcon"
              />
              {post.comments.length}
            </Info>
          </div>
          <div className="created">{elapsedTime(post.createdAt)}</div>
        </StInfo>
      </Content>
    </Container>
  );
};

const tooltip = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`;

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
    animation: ${tooltip} 0.25s linear;
  }
`;

const Content = styled.div`
  display: none;
  position: absolute;
  z-index: 200;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 14px;
  white-space: nowrap;
  background-color: #707070;
  color: white;
  border-radius: 10px;
  padding: 10px;
`;

const StTitle = styled.div`
  margin-bottom: 5px;
`;

const StImg = styled.div`
  img {
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-select: none;
  }
`;

const StInfo = styled.div`
  margin-top: 10px;
  width: 100%;

  .infoBox {
    display: flex;
    align-items: center;
  }

  .created {
    margin-top: 3px;
  }
`;

const Info = styled.div`
  margin-right: 4px;

  .infoIcon {
    color: ${theme.colors.primary1};
    margin-right: 2px;
  }
`;

export default HouseTooltip;
