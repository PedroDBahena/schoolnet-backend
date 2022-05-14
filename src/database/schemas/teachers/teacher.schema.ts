import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Teacher {
  @Prop({ required: true })
  name: String;
  @Prop({ required: true })
  age: Number;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
