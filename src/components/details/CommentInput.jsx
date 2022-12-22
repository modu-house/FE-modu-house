import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import theme from '../../styles/theme';

function CommentInput() {
  return (
    <StCommentInput>
      <Input type="text" placeholder="댓글을 입력해주세요" />
      <button>
        <FontAwesomeIcon icon={faPen} className="pen" />
      </button>
    </StCommentInput>
  );
}

const StCommentInput = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    margin-right: 20px;
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  .pen {
    color: ${theme.colors.primary1};
    font-size: 30px;
  }

  button:hover {
    color: ${theme.colors.primary3};
    transition: all 0.2s;
    scale: 1.4;
    transform: rotate(10deg);
  }
`;

export default CommentInput;
