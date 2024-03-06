import { IconButton, styled } from "@mui/material";
import React from "react";
import { ArrowButtonTrusteeProps } from "./ArrowButtonTrustee.types";

const StyledIconButton = styled(IconButton)`
  display: flex;
  align-items: center;
  height: 44px;
  width: 44px;
`;

const StyledSvgContainer = styled("div")`
  display: flex;
  margin-top: 5px; //temp style
  circle {
    fill: ${(props) => props.theme.palette.primaryButtonColor2.contrastText};
  }
  path {
    fill: ${(props) => props.theme.palette.primaryButtonColor2.main};
  }
  &:hover circle {
    fill: ${(props) => props.theme.palette.primaryButtonColor2.main};
  }
  &:hover path {
    fill: ${(props) => props.theme.palette.primaryButtonColor2.contrastText};
  }
`;

const ArrowButtonTrustee = ({
  id,
  ariaLabel,
  onClick,
  children,
  ...props
}: ArrowButtonTrusteeProps) => {
  return (
    <StyledIconButton
      id={id}
      aria-label={ariaLabel}
      type="button"
      onClick={onClick}
      {...props}
    >
      <StyledSvgContainer>{children}</StyledSvgContainer>
    </StyledIconButton>
  );
};

export default ArrowButtonTrustee;
