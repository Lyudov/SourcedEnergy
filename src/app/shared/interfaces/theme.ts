import { User } from './user';

export interface Theme {
  _id: string;
  type: string;
  year: string;
  description: string;
  price: number;
  image: string;
  material: string;
  ownerId: User;
}
