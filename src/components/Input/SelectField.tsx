import { MenuItem, Select, styled } from "@mui/material";
import React from "react";
import { SelectFieldProps } from "./SelectField,types";

const StyledContainer = styled("div")``;
const StyledLabel = styled("p")`
  color: ${(props) => props.theme.typography.body1.color};
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  text-align: left;
  margin-bottom: 8px; //temp style
`;
const StyledPlaceHolder = styled("div")`
  font-style: ${(props) => props.theme.typography.caption.fontStyle};
  color: ${(props) => props.theme.typography.caption.color};
  font-size: ${(props) => props.theme.typography.caption.fontSize};
  opacity: 0.4;
`;

const StyledError = styled("div")`
  color: ${(props) => props.theme.palette.warning.main};
`;

const StyledMenuItem = styled(MenuItem)`
  &:focus {
    color: ${(props) => props.theme.palette.primary.main};
    font-weight: bold;
  }
`;

const SelectField = ({
  label,
  name,
  id,
  data,
  placeholder,
  value,
  onChange,
  error,
  ...props
}: SelectFieldProps) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>

      <Select
        {...props}
        displayEmpty
        id={id}
        name={name}
        variant="standard"
        value={value}
        onChange={onChange}
        sx={{ width: "150px" }}
        renderValue={
          value !== ""
            ? undefined
            : () => <StyledPlaceHolder>{placeholder}</StyledPlaceHolder>
        }
      >
        {data.map((item, index) => {
          return (
            <StyledMenuItem key={index} value={item.value}>
              {item.name}
            </StyledMenuItem>
          );
        })}
      </Select>
      {error ? <StyledError>{error}</StyledError> : null}
    </StyledContainer>
  );
};

export default SelectField;
