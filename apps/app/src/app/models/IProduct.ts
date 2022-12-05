import { IRating } from './IRating';
export interface IProduct {
  id?: number;
  title: string;
  price: number;
  image?: string;
  rating?: IRating;
  category: string;
  description: string;
}
