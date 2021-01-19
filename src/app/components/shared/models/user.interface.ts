export interface User {
  uid: string;
  email: string;
  displayName?: string;
  emailVerified: boolean;
  password?: string;
  photoURL?: string;
  role?: Roles;
  createdUserAt?: string;
}

export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';
