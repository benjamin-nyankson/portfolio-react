import { FC } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const ButtonComponent: FC<ButtonProps> = ({ text, onClick, disabled, loading }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 bg-orange-500 text-white font-bold rounded-lg transition hover:bg-orange-600 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default ButtonComponent;
