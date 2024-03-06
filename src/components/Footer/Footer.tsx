import React from "react";
import styled from "styled-components";
import edit from "../../assets/icons/Edit.svg";
import employee from "../../assets/icons/Employee.svg";
import employer from "../../assets/icons/Employer.svg";
import { FooterContainer } from "../../globalStyles";
import ButtonGeneralCTA from "../Buttons/ButtonGeneralCTA";
import FloatingIconButton from "../Buttons/FloatingIconButton";
import OutlineButtonClear from "../Buttons/OutlineButtonClear";
import OutlineButtonSave from "../Buttons/OutlineButtonSave";

const Nav = styled.nav`
  background: rgb(66, 82, 110, 0.77);
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  bottom: 0;
  z-index: 9;
`;

const FootContainer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  height: 76px;
  z-index: 10;

  ${FooterContainer}
`;

const StyledContainer = styled.div`
  display: flex;
`;

const StyledStroke = styled.div`
  display: flex;
  width: 1px;
  background-color: #fff;
  margin: 10px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Nav>
      <FootContainer>
        <StyledIconContainer>
          <FloatingIconButton
            id={"edit"}
            ariaLabel={"edit icon"}
            onClick={() => console.log("edit")}
            src={edit}
            alt={"edit"}
          />
          <FloatingIconButton
            id={"employee"}
            ariaLabel={"employee icon"}
            onClick={() => console.log("employee")}
            src={employee}
            alt={"employee"}
          />
          <FloatingIconButton
            id={"employer"}
            ariaLabel={"employer icon"}
            onClick={() => console.log("employer")}
            src={employer}
            alt={"employer"}
          />
        </StyledIconContainer>
        <StyledContainer>
          <StyledStroke />
          <StyledButtonContainer>
            <OutlineButtonClear
              id="test clear"
              text="clear"
              onClick={() => console.log("clear")}
            />
            <OutlineButtonSave
              id="test save"
              text="Save"
              onClick={() => console.log("save")}
            />
            <ButtonGeneralCTA
              id="test371"
              text="Submit"
              onClick={() => console.log("hi")}
            />
          </StyledButtonContainer>
        </StyledContainer>
      </FootContainer>
    </Nav>
  );
};

export default Footer;
