import React from 'react';
import styled from 'styled-components';

function MenuButton() {
  return (
    <STMenuBtn>
      <span className="line1" />
      <span className="line2" />
      <span className="line3" />
    </STMenuBtn>
  );
}

const STMenuBtn = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  border: inherit;
  background-color: inherit;

  span {
    display: block;
    background: ${({ theme }) => theme.colors.primary1};
    width: 32px;
    height: 6px;
    border-radius: 30px;
    position: absolute;
    ${({ theme }) => theme.common.absoluteCenter};
  }

  .line1 {
    margin-top: -9px;
  }

  .line3 {
    margin-top: 9px;
  }
`;

export default MenuButton;
