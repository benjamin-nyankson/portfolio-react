import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const Card = ({ title, description, children }: CardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500">{description}</p>
      {children}
    </div>
  );
};

export default Card;
