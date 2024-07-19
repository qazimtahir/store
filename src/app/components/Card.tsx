import Image from "next/image";
import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price?: number; // Make price optional
  category: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, category, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        className="w-screen h-48 object-cover"
        src={imageUrl}
        alt={title}
        width={200}
        height={200}
      />
      <div className="p-4">
        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          {category}
        </h5>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        {price && (
          <p className="mt-2 text-sm font-medium text-green-700">
            ${price.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
