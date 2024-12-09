import { BaseballCard } from '../types/card';

export const cards: BaseballCard[] = [
  {
    id: '1',
    name: 'Mickey Mantle',
    team: 'New York Yankees',
    year: 1952,
    position: 'Center Fielder',
    price: 5500000,
    condition: 'Near Mint',
    imageUrl: 'https://images.unsplash.com/photo-1588509256915-ebda5440c8d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Willie Mays',
    team: 'New York Giants',
    year: 1951,
    position: 'Center Fielder',
    price: 175000,
    condition: 'Excellent',
    imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Babe Ruth',
    team: 'Boston Red Sox',
    year: 1916,
    position: 'Pitcher/Outfielder',
    price: 1200000,
    condition: 'Good',
    imageUrl: 'https://images.unsplash.com/photo-1508163223045-1880bc36e222?auto=format&fit=crop&w=800&q=80',
  },
];