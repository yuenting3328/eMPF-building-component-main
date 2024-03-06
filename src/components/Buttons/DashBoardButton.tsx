import { Button, styled } from "@mui/material";
import React from "react";
import { DashBoardButtonProps } from "./DashBoardButton.types";

const StyledButton = styled(Button)`
  color: ${(props) => props.theme.palette.text.primary};
  width: 160px;
  display: flex;
  justify-content: flex-start;

  &:focus {
    color: ${(props) => props.theme.palette.secondary.main};
    font-weight: bold;
    &:hover,
    &.Mui-focusVisible {
      border-width: 2;
      border-radius: 5px;
      box-shadow: none;
      color: ${(props) => props.theme.palette.secondary.contrastText};
    }
  }
  &:hover,
  &.Mui-focusVisible {
    border-width: 2;
    border-radius: 5px;
    background-color: ${(props) => props.theme.palette.secondary.main};
    box-shadow: none;
    color: ${(props) => props.theme.palette.secondary.contrastText};
  }
`;

const StyledSvgContainer = styled("div")`
  display: flex;
  align-items: center;
  fill: currentcolor;
`;

const StyledText = styled("div")`
  flex: 0;
  line-height: 17px;
`;

const DashBoardButton = ({
  id,
  text,
  children,
  onClick,
  ...props
}: DashBoardButtonProps) => {
  return (
    <StyledButton id={id} variant="text" onClick={onClick} {...props}>
      <StyledSvgContainer>{children}</StyledSvgContainer>
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

export default DashBoardButton;
