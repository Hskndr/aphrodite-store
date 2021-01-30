export interface MessageI {
  id?: string;
  email: string;
  name: string;
  message: string;
  date?: Date;
  read: boolean;
}
