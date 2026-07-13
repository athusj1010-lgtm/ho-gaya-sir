// src/components/common/Dropdown.tsx

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  value: string;
  options: Option[];
  onChange: (
    value: string
  ) => void;
};

export default function Dropdown({
  value,
  options,
  onChange,
}: DropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}