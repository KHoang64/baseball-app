import React, { useState } from 'react';
import { BaseballCard } from './types/card';
import { cards } from './data/cards';
import { Card } from './components/Card';
import { Cart } from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState<BaseballCard[]>([]);

  const addToCart = (card: BaseballCard) => {
    setCartItems(prev => [...prev, card]);
  };

  const removeFromCart = (cardId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== cardId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Cart items={cartItems} onRemove={removeFromCart} />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Vintage Baseball Cards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(card => (
            <Card 
              key={card.id} 
              card={card} 
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;