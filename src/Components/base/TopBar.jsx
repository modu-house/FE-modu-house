import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/modu-house.svg';

function TopBar() {
  return (
    <StyledTopBar>
      <Link to="/" className="home">
        <StyledLogo>
          <img className="logo" src={Logo} alt="logo" />
          <h1>모두의 집</h1>
        </StyledLogo>
      </Link>
      <StyledNav>
        <span className="line1" />
        <span className="line2" />
        <span className="line3" />
      </StyledNav>
    </StyledTopBar>
  );
}

export default TopBar;

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1200px; */
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.bg_paper2};
`;

const StyledLogo = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  .logo {
    height: 45px;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-select: none;
    margin: 0 10px 0 10px;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-family: onuel;
  }
`;

const StyledNav = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  span {
    display: block;
    background: ${({ theme }) => theme.colors.primary1};
    width: 33px;
    height: 6px;
    border-radius: 30px;
    position: absolute;
    top: 23px;
    left: 0;
  }

  .line1 {
    margin-top: -9px;
  }

  .line3 {
    margin-top: 9px;
  }
`;
