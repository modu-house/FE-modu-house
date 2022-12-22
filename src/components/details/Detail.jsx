import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCommentDots,
  faHeart,
  faLocationDot,
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import theme from '../../styles/theme';
import { formatTime } from '../../utils/time';

function Detail({ data }) {
  return (
    <StDetail>
      <div className="top">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="arrow" />
        </Link>
        <StInfo>
          <div className="infoBox">
            <Info className="local">
              <FontAwesomeIcon icon={faLocationDot} className="infoIcon" />
              {data?.local}
            </Info>
            <Info className="user">
              <FontAwesomeIcon icon={faUser} className="infoIcon" />
              {data?.username}
            </Info>
          </div>
          <div className="created">{formatTime(data?.createdAt)}</div>
        </StInfo>
      </div>
      <StMain>
        <StImg>
          {data.imageList &&
            data?.imageList.map((img) => (
              <img className="image" src={img} alt="image" />
            ))}
        </StImg>
        <StText>
          <div className="title">{data?.title}</div>
          <div className="content">{data?.content}</div>
        </StText>
        <div className="main">
          <StCount>
            <Count>
              <FontAwesomeIcon icon={faHeart} className="likeCount countIcon" />
              <span>{data?.boardLike}</span>
            </Count>
            <Count>
              <FontAwesomeIcon
                icon={faCommentDots}
                className="commentCount countIcon"
              />
              <span>{data.commentList?.length}</span>
            </Count>
            <Count>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="viewCount countIcon"
              />
              <span></span>
            </Count>
          </StCount>
          <StLike>
            <button>
              <span>좋아요</span>
              <FontAwesomeIcon icon={faHeart} className="likeItIcon" />
            </button>
          </StLike>
        </div>
        <div className="bottom">
          <Link to="/write">
            <button>
              <FontAwesomeIcon icon={faPenToSquare} className="modifyIcon" />
            </button>
          </Link>
          <button>
            <FontAwesomeIcon icon={faTrash} className="trashIcon" />
          </button>
        </div>
      </StMain>
    </StDetail>
  );
}

const StDetail = styled.div`
  width: 100%;
  margin: 30px auto;

  .top {
    display: flex;
    align-items: center;
  }

  .arrow {
    font-size: 40px;
    color: ${theme.colors.text3};
    margin-right: 20px;
  }
`;

// 사진 상단 정보(local user created)
const StInfo = styled.div`
  width: 100%;

  .infoBox {
    display: flex;
    align-items: center;
  }

  .created {
    font-size: 14px;
    color: ${theme.colors.text3};
    margin-top: 8px;
  }
`;

const Info = styled.div`
  font-size: 22px;
  margin-right: 10px;

  .infoIcon {
    color: ${theme.colors.primary1};
    margin-right: 4px;
  }

  .infoIcon:hover {
    color: ${theme.colors.primary3};
    transition: all 0.2s;
    scale: 1.3;
  }
`;

// main detail 영역
const StMain = styled.div`
  width: 70%;
  margin: 0 auto;

  .main {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .bottom {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-top: 10px;

    button {
      font-size: 30px;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    font-size: 22px;
    color: ${theme.colors.primary1};
    cursor: pointer;
  }

  button:hover {
    color: ${theme.colors.primary3};
  }
`;

// 사진 영역
const StImg = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

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

// 게시글 제목과 내용 영역
const StText = styled.div`
  white-space: pre-line;
  word-wrap: break-word;

  .title {
    font-size: ${theme.fontSizes.subtitle};
    font-weight: 600;
  }

  .content {
    font-size: ${theme.fontSizes.paragraph};
    line-height: 20px;
    margin-top: 10px;
  }
`;

// like count view
const StCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  color: ${theme.colors.primary1};
`;

const Count = styled.div`
  margin-right: 14px;

  span {
    font-size: 16px;
    font-weight: 900;
  }

  &:hover {
    color: ${theme.colors.primary3};
    transition: all 0.2s;
    scale: 1.3;
  }
`;

// 다른 사람의 게시글 좋아요
const StLike = styled.div`
  display: flex;
  justify-content: flex-end;

  span {
    font-size: 14px;
    margin-right: 10px;
  }
`;

export default Detail;
