import React from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  const alertStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  return (
    <div className={`fixed z-50 top-4 right-4 px-6 py-4 text-white rounded-lg shadow-lg ${alertStyles[type]}`}>
      <div className="flex items-center">
        <p className="mr-4">{message}</p>
        <button onClick={onClose} className="text-xl font-bold hover:bg-opacity-75 cursor-pointer">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;
