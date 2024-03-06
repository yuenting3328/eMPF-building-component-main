import { Button, styled } from "@mui/material";
import React from "react";
import { ButtonCom371Props } from "./ButtonCom371.types";

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primaryButtonColor1.main};
  color: ${(props) => props.theme.palette.primaryButtonColor1.contrastText};
  width: 90px;
  height: 32px;
  border-radius: 19px;
  padding: 0;

  font-size: 11px;
  text-align: center;
  letter-spacing: 0.39px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: ${(props) =>
      props.theme.palette.primaryButtonColor1.light};
    box-shadow: none;
  }
`;

const ButtonCom371 = ({ text, id, onClick, ...props }: ButtonCom371Props) => {
  return (
    <StyledButton
      id={id}
      type="submit"
      variant="contained"
      disableElevation
      onClick={onClick}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default ButtonCom371;
