import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
}

export default function ProductCard({ image, name, price, category }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <img
          src={image}
          alt={name}
          className="h-96 w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{name}</h3>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
}