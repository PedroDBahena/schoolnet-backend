import { Connection } from 'mongoose';
import { DATABASE_CONNECTION, TEACHER_MODEL } from 'src/constants';
import { TeacherSchema } from 'src/database/schemas/teachers/teacher.schema';

export const teachersProvides = [
  {
    provide: TEACHER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Teacher', TeacherSchema),
    inject: [DATABASE_CONNECTION],
  },
];
