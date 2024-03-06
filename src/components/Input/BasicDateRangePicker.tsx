import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

const BasicDateRangePicker = () => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={({ inputProps, ...startProps }, endProps) => {
            const startValue = inputProps?.value;
            delete inputProps?.value
            return (
              <TextField
                {...startProps}
                inputProps={inputProps}
                value={`${startValue}-${endProps.inputProps?.value}`}
             />
  )}}
        />
    </LocalizationProvider>
  );
}

export default BasicDateRangePicker