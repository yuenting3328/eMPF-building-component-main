import { Button, styled } from "@mui/material";
import React from "react";
import { SearchButtonProps } from "./SearchButton.types";

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primaryButtonColor1.main};
  color: ${(props) => props.theme.palette.primaryButtonColor1.contrastText};
  width: 107px;
  height: 38px;
  border-radius: 19px;
  padding: 0;

  font-size: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) =>
      props.theme.palette.primaryButtonColor1.light};
    box-shadow: none;
  }
`;

const SearchButton = ({ text, id, onClick, ...props }: SearchButtonProps) => {
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

export default SearchButton;
