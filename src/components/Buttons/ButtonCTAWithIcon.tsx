import { Button, styled } from "@mui/material";
import React from "react";
import { ReactComponent as Add } from "../../assets/icons/ic_uploader_add.svg";
import { ButtonCTAWithIconProps } from "./ButtonCTAWithIcon.types";

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primaryButtonColor2.main};
  color: ${(props) => props.theme.palette.primaryButtonColor2.contrastText};
  width: 189px;
  height: 38px;
  border-radius: 19px;
  margin: 5px;
  display: flex;
  justify-content: flex-end;

  font-size: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: ${(props) =>
      props.theme.palette.primaryButtonColor2.light};
    box-shadow: none;
  }
`;

const StyledAddIcon = styled(Add)`
  position: absolute;
  margin-right: 75%;
`;

const ButtonCTAWithIcon = ({
  text,
  id,
  onClick,
  ...props
}: ButtonCTAWithIconProps) => {
  return (
    <StyledButton
      id={id}
      type="button"
      variant="contained"
      disableElevation
      onClick={onClick}
      {...props}
    >
      <StyledAddIcon />
      {text}
    </StyledButton>
  );
};

export default ButtonCTAWithIcon;
