import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from "@mui/material";

export interface DropDownWithSwitchProps {
  id: string;
  options: string[];
  placeholder: string;
  label: string;
  value: string[] | undefined;
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string[],
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined
  ) => void;
}
