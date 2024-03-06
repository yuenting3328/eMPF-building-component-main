import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { styled, TextField } from "@mui/material";
import React from "react";
import { DatePickerCommonProps } from "./DatePickerCommon.types";

const StyledContainer = styled("div")``;

const StyledLabel = styled("p")`
  color: ${(props) => props.theme.typography.body1.color};
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  text-align: left;
`;

const StyledTextField = styled(TextField)`
  & input::placeholder {
    font-style: ${(props) => props.theme.typography.caption.fontStyle};
    font-size: ${(props) => props.theme.typography.caption.fontSize};
    color: ${(props) => props.theme.typography.caption.color};
  }
`;

export default function DatePickerCommon({
  label,
  id,
  placeholder,
  helperText,
  value,
  onChange,
  ...props
}: DatePickerCommonProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledContainer>
        <StyledLabel>{label}</StyledLabel>

        <DesktopDatePicker
          {...props}
          value={value}
          inputFormat="dd/MM/yyyy"
          onChange={onChange}
          renderInput={(params) => (
            <StyledTextField
              id={id}
              variant="standard"
              {...params}
              inputProps={{ ...params.inputProps, placeholder: placeholder }}
              helperText={helperText}
            />
          )}
        />
      </StyledContainer>
    </LocalizationProvider>
  );
}
