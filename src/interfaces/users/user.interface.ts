import { Document } from 'mongoose';
export interface User extends Document {
  readonly name: string;
  readonly lastname: string;
  readonly age: number;
  readonly address: string;
  readonly email: string;
  readonly password: string;
  readonly role: string;
}
