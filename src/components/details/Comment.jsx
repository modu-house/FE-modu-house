import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faHeart,
  faPenToSquare,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const Comment = ({ data }) => {
  return (
    <StWrapper>
      <StComment>
        <Content>
          <FontAwesomeIcon icon={faCommentDots} className="commentIcon icon" />
          <div className="commentText">{data.comment}</div>
        </Content>
        <Like>
          <button>
            <FontAwesomeIcon icon={faHeart} className="likeIcon" />
          </button>
        </Like>
      </StComment>
      <StBox>
        <StInfo>
          <User>
            <FontAwesomeIcon icon={faUser} className="userIcon icon" />
            {data.username}
          </User>
          <div className="created">{data.createdAt}</div>
        </StInfo>
        <My>
          <button>
            <FontAwesomeIcon icon={faPenToSquare} className="modifyIcon" />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} className="trashIcon" />
          </button>
        </My>
      </StBox>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  margin: 10px 0;
`;

const StComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;

  .commentIcon {
    font-size: 22px;
    margin-right: 6px;
  }

  .commentText {
    font-size: 16px;
    line-height: 16px;
    white-space: pre-line;
    word-wrap: break-word;
  }
`;

const Like = styled.div`
  .likeIcon {
    font-size: 22px;
    color: ${theme.colors.primary1};
  }
`;

const StBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StInfo = styled.div`
  display: flex;
  align-items: center;

  .created {
    font-size: 14px;
    color: ${theme.colors.text3};
    margin-left: 4px;
  }
`;

const User = styled.div`
  line-height: 16px;

  .userIcon {
    font-size: 20px;
    margin-right: 4px;
  }
`;

const My = styled.div`
  button {
    font-size: 22px;
  }
`;

export default Comment;
