import { FC } from "react";

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalComponent: FC<ModalProps> = ({ open, title, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button onClick={onClose} className="absolute top-2 right-4 text-lg font-bold">X</button>
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
