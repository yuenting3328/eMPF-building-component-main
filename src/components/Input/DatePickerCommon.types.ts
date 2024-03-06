
export interface DatePickerCommonProps {
  id: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  value: Date | null;
  onChange: (date: string | null, keyboardInputValue?: string | undefined) => void;

}
