import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { BaseballCard } from '../types/card';
import { formatCurrency } from '../utils/format';

interface CartProps {
  items: BaseballCard[];
  onRemove: (cardId: string) => void;
}

export function Cart({ items, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed right-4 top-4 w-96 bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingCart className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
      </div>
      
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-3 mb-4">
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.year}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium">{formatCurrency(item.price)}</span>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 flex justify-between items-center">
            <span className="font-semibold">Total:</span>
            <span className="text-lg font-bold">{formatCurrency(total)}</span>
          </div>
          <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}