import { ChangeEvent } from "react";

function Select({
  value,
  onChange,
  options,
  label,
  isDisabled,
}: {
  value: string | number;
  label: string;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; name: string }[];
  isDisabled: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-1">
      <label className="text-xs text-gray-600 ml-1" htmlFor={label}>
        {label}
      </label>
      <select
        disabled={isDisabled}
        className="bg-gray-200 cursor-pointer hover:bg-gray-400 transition ease-in active:ring-0 active:border-0 p-2 min-w-[200px] sm:min-w-full"
        id={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default Select;
