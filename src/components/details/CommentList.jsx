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
import theme from '../../styles/theme';

function CommentList() {
  return (
    <StCommentList>
      <StWrapper>
        <StComment>
          <Comment>
            <FontAwesomeIcon
              icon={faCommentDots}
              className="commentIcon icon"
            />
            <div className="commentText">
              댓글 내용 댓글 안달면 불주먹 날라감 댓글 안달면 불주먹 날라감 댓글
              안달면 불주먹 날라감
            </div>
          </Comment>
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
              유저이름
            </User>
            <div className="created">2022.01.01</div>
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
      {/* 아래는 테스트용 */}
      <StWrapper>
        <StComment>
          <Comment>
            <FontAwesomeIcon
              icon={faCommentDots}
              className="commentIcon icon"
            />
            댓글 내용 댓글 안달면 불주먹 날라감 댓글 안달면 불주먹 날라감 댓글
            안달면 불주먹 날라감
          </Comment>
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
              유저이름
            </User>
            <div className="created">2022.01.01</div>
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
    </StCommentList>
  );
}

const StCommentList = styled.div`
  width: 70%;
  margin: 20px auto;
  padding-bottom: 40px;

  .icon {
    color: ${theme.colors.primary1};
  }

  .icon:hover {
    color: ${theme.colors.primary3};
    transition: all 0.2s;
    scale: 1.3;
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    color: ${theme.colors.primary1};
  }

  button:hover {
    color: ${theme.colors.primary3};
    transition: all 0.2s;
    scale: 1.3;
  }
`;

const StWrapper = styled.div`
  margin: 10px 0;
`;

const StComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Comment = styled.div`
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

export default CommentList;
