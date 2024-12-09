import React from 'react';
import { BaseballCard } from '../types/card';
import { formatCurrency } from '../utils/format';
import { Badge } from './Badge';

interface CardProps {
  card: BaseballCard;
  onAddToCart: (card: BaseballCard) => void;
}

export function Card({ card, onAddToCart }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={card.imageUrl} 
        alt={card.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{card.name}</h3>
          <Badge condition={card.condition} />
        </div>
        <p className="text-gray-600">{card.team}</p>
        <p className="text-sm text-gray-500">{card.year} • {card.position}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            {formatCurrency(card.price)}
          </span>
          <button
            onClick={() => onAddToCart(card)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}