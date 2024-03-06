import { Button, styled } from "@mui/material";
import React from "react";
import { ClearButtonProps } from "./ClearButton.types";

const StyledButton = styled(Button)`
  border-color: ${(props) => props.theme.palette.secondaryButtonColor2.main};
  border-width: 2px;
  border-style: solid;
  width: 107px;
  height: 38px;
  border-radius: 19px;

  font-size: 14px;
  color: ${(props) => props.theme.palette.secondaryButtonColor2.main};
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    border-width: 2px;
    border-color: ${(props) => props.theme.palette.secondaryButtonColor2.main};
    background-color: ${(props) =>
      props.theme.palette.secondaryButtonColor2.main};
    box-shadow: none;
    color: ${(props) => props.theme.palette.secondaryButtonColor2.contrastText};
  }
`;

const ClearButton = ({ text, id, onClick, ...props }: ClearButtonProps) => {
  return (
    <StyledButton
      id={id}
      type="button"
      variant="outlined"
      onClick={onClick}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default ClearButton;
