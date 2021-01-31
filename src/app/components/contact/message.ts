export interface MessageI {
  id?: string;
  email: string;
  name: string;
  phone: string;
  message: string;
  date?: Date;
  read: boolean;
}
