import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

type FilterSelectProps<T> = {
  label: string;
  error?: string;
  required?: boolean;
  value: T | null;
  onChange: (value: T | null) => void;
  options: T[];
  getOptionLabel: (option: T) => string;
  getOptionValue?: (option: T) => any;
};

export default function FilterSelect<T>({
  label,
  value,
  onChange,
  error,
  required,
  options,
  getOptionLabel,
  getOptionValue,
}: FilterSelectProps<T>) {
  const CustomArrowIcon = (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
      <path
        d="M10.6667 13.9995C10.0834 13.9995 9.50004 13.7745 9.05837 13.3329L3.62504 7.89954C3.38337 7.65788 3.38337 7.25788 3.62504 7.01621C3.8667 6.77454 4.2667 6.77454 4.50837 7.01621L9.9417 12.4495C10.3417 12.8495 10.9917 12.8495 11.3917 12.4495L16.825 7.01621C17.0667 6.77454 17.4667 6.77454 17.7084 7.01621C17.95 7.25788 17.95 7.65788 17.7084 7.89954L12.275 13.3329C11.8334 13.7745 11.25 13.9995 10.6667 13.9995Z"
        fill="#9A9A9A"
      />
    </svg>
  );

  return (
    <div className="flex-1">
      <label htmlFor="select" className="block mr-1 mb-3">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <Autocomplete
        value={value}
        onChange={(event, newValue) => onChange(newValue)}
        id="select"
        disablePortal
        popupIcon={CustomArrowIcon}
        options={options}
        getOptionLabel={(option) => getOptionLabel(option)}
        isOptionEqualToValue={(option, val) =>
          getOptionValue
            ? getOptionValue(option) === getOptionValue(val)
            : option === val
        }
        sx={{
          "& .MuiInputBase-root": {
            height: 48,
          },

          "& .MuiOutlinedInput-root": {
            backgroundColor: "#F9FAFB",
            borderRadius: "12px",
            paddingRight: "8px",
            paddingLeft: "8px",
            "& fieldset": { border: "1px solid #EDF1F3" },
            "&:hover fieldset": { border: "1px solid #EDF1F3" },
            "&.Mui-focused fieldset": { border: "1px solid #EDF1F3" },
            "& .MuiInputBase-input": { fontFamily: "Almarai" },
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={label}
            error={!!error}
            helperText={error || " "}
          />
        )}
      />
    </div>
  );
}
