import React from 'react';
import { BaseballCard } from '../types/card';

interface BadgeProps {
  condition: BaseballCard['condition'];
}

const conditionColors = {
  'Mint': 'bg-green-100 text-green-800',
  'Near Mint': 'bg-blue-100 text-blue-800',
  'Excellent': 'bg-yellow-100 text-yellow-800',
  'Good': 'bg-orange-100 text-orange-800',
  'Fair': 'bg-red-100 text-red-800',
};

export function Badge({ condition }: BadgeProps) {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${conditionColors[condition]}`}>
      {condition}
    </span>
  );
}