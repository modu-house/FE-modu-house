import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

function CommentList({ comments }) {
  return (
    <StCommentList>
      {comments &&
        comments.map((comment) => {
          <Comment data={comment} />;
        })}
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

export default CommentList;
