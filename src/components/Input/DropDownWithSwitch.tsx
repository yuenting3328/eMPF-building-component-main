import { styled, Switch } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { DropDownWithSwitchProps } from "./DropDownWithSwitch.types";

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

const StyledSwitch = styled(Switch)`
  width: 28px;
  height: 16px;
  padding: 0px;
  display: flex;
  &:active {
    & .MuiSwitch-thumb {
      width: 15px;
    }
    & .MuiSwitch-switchBase.Mui-checked {
      transform: translateX(9px);
    }
  }
  & .MuiSwitch-switchBase {
    padding: 2px;
    &.Mui-checked {
      transform: translateX(12px);
      color: ${(props) => props.theme.palette.background.paper};
      & + .MuiSwitch-track {
        opacity: 1;
        background-color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }
  & .MuiSwitch-thumb {
    box-shadow: 0px 2px 4px 0px rgb(0 35 11 / 20%);
    width: 12px;
    height: 12px;
    border-radius: 6px;
    transition: ${(props) =>
      props.theme.transitions.create(["width"], {
        duration: 200,
      })};
  }
  & .MuiSwitch-track {
    border-radius: 8px;
    background-color: ${(props) => props.theme.palette.info.light};
    box-sizing: border-box;
  }
`;

const StyledText = styled("div")`
  margin-left: 10px;
`;

export default function DropDownWithSwitch({
  id,
  options,
  placeholder,
  label,
  value,
  onChange,
  ...props
}: DropDownWithSwitchProps) {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <Autocomplete
        {...props}
        multiple
        id={id}
        options={options}
        value={value}
        onChange={onChange}
        disableCloseOnSelect
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <StyledSwitch checked={selected} name={option} />
            <StyledText>{option}</StyledText>
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            variant={"standard"}
            placeholder={placeholder}
          />
        )}
      />
    </StyledContainer>
  );
}
