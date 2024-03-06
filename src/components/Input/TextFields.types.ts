import { ChangeEventHandler } from "react";

export interface TextFieldProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string | any ;
  value: string;
  error: boolean |any;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
