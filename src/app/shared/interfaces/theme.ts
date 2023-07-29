import { User } from './user';

export interface Theme {
  model: string;
  year: string;
  description: string;
  price: number;
  image: string;
  material: string;
  ownerId: User;
}
