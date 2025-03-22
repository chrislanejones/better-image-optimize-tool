// ~/components/ui/SimpleSelect.tsx
import * as React from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface SimpleSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
}

export const SimpleSelect: React.FC<SimpleSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  className = "",
  disabled = false,
}) => {
  // Find the selected option's label
  const selectedOption = options.find((option) => option.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <div className={`relative inline-block ${className}`}>
      {label && (
        <label htmlFor="select" className="block mb-1 text-sm font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id="select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="block w-full h-9 appearance-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm pr-8 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:focus:ring-slate-300"
        >
          {!selectedOption && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 h-4 w-4 opacity-50" />
      </div>
    </div>
  );
};

export default SimpleSelect;
