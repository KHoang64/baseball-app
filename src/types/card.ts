export interface BaseballCard {
  id: string;
  name: string;
  team: string;
  year: number;
  position: string;
  price: number;
  condition: 'Mint' | 'Near Mint' | 'Excellent' | 'Good' | 'Fair';
  imageUrl: string;
}