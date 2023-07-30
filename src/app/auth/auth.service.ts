import { Injectable } from '@angular/core';

import { User } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | null = {
    firstName: 'Sa',

    lastName: 'So',
    email: 'samisousa@gmail.',
  } as any;

  get isLoggedIn() {
    return this.user != null;
  }

  constructor() {}
}
