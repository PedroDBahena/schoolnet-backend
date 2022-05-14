import { Document } from 'mongoose';

export interface Teacher extends Document {
  readonly name: String;
  readonly age: Number;
}
