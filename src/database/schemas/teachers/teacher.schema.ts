import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Teacher {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  age: number;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
