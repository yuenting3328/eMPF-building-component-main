import { Autocomplete, Paper, styled, TextField } from "@mui/material";
import React from "react";
import { DropDownAutoCompleteProps } from "./DropDownAutoComplete.types";

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

const StyledPaper = styled(Paper)``;

const DropDownAutoComplete = ({
  label,
  options,
  id,
  placeholder,
  value,
  onChange,
  ...props
}: DropDownAutoCompleteProps) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <Autocomplete
        {...props}
        options={options}
        id={id}
        value={value}
        onChange={onChange}
        autoHighlight
        PaperComponent={({ children }) => <StyledPaper>{children}</StyledPaper>}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            placeholder={placeholder}
            variant="standard"
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      />
    </StyledContainer>
  );
};

export default DropDownAutoComplete;
