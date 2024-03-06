import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavBarContainer } from "../../globalStyles";
import {ReactComponent as NavIcon} from '../../assets/icons/eMPFLogo.svg'

const Nav = styled.nav`
  background: #0D6A88;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  /* margin-bottom: 5%; //TEMP style */
`;

const NavbarContainer = styled(NavBarContainer)`
  display: flex;
  justify-content: space-between;
  height: 56px;

  ${NavBarContainer}
`;

const Logo = styled(Link)`
  cursor: pointer;
`;

const date = new Date();

const StyledContainer = styled.div`
  display: flex;
`

const StyledStroke = styled.div`
  display: flex;
  width: 1px;
  background-color: #FFF;
  margin: 10px;
`

const ServerDate = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <Logo to="/">
          <NavIcon id="NavIcon"/>
        </Logo>
        <StyledContainer>
        <StyledStroke />
        <ServerDate>
          {date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear()}
        </ServerDate>
        </StyledContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
