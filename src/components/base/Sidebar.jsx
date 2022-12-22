import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuButton from './MenuButton';

function SideBar() {
  const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen); // on,off 개념 boolean
  };

  return (
    <StSideBar>
      <div className="sideWrapper">
        <div onClick={() => toggleMenu()}>
          <MenuButton></MenuButton>
        </div>
      </div>
      <ul className={isOpen ? 'show-menu' : 'hide-menu'}>
        <Link to="/" className="home">
          <li>home</li>
        </Link>
        <Link to="/login" className="login">
          <li>login</li>
        </Link>
        <Link to="/register" className="register">
          <li>register</li>
        </Link>
        <Link to="/write" className="write">
          <li>write</li>
        </Link>
      </ul>
    </StSideBar>
  );
}

const StSideBar = styled.div`
  .show-menu {
    width: 300px;
    height: 100vh;
    position: absolute;
    right: 0;
    transition: all 1s;
    z-index: 900;
    background-color: ${({ theme }) => theme.colors.primary2};
    padding-top: 100px;
  }

  .hide-menu {
    width: 300px;
    height: 100vh;
    position: absolute;
    right: -300px;
    transition: all 1s;
    padding-top: 100px;
  }

  li {
    color: ${({ theme }) => theme.colors.button_text};
    font-weight: 900;
    font-size: 30px;
    margin-left: 40px;
    margin-bottom: 20px;
  }
`;

export default SideBar;
