import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/modu-house.svg';
import MenuButton from './MenuButton';

function TopBar() {
  return (
    <StyledCenter>
      <StyledTopBar>
        <Link to="/" className="home">
          <StyledLogo>
            <img className="logo" src={Logo} alt="logo" />
            <h1>모두의 집</h1>
          </StyledLogo>
        </Link>
        <StyledNav>
          <MenuButton />
        </StyledNav>
      </StyledTopBar>
    </StyledCenter>
  );
}

export default TopBar;

const StyledCenter = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenter}
`;

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.bg_paper2};
`;

const StyledLogo = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  .logo {
    height: 35px;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-select: none;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.subtitle};
    height: 20px;
    font-family: onuel;
  }
`;

const StyledNav = styled.div`
  margin-right: 10px;
`;
