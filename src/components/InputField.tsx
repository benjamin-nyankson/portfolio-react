import { FC } from "react";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

const InputField: FC<InputFieldProps> = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#334054] font-sans text-base font-semibold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex w-[400px] h-[44px] px-2 py-1 items-center border focus:border-[#FD6F00] border-[#d0d5dd] rounded-lg"
      />
    </div>
  );
};

export default InputField;
