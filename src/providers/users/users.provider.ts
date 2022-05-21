import { Connection } from 'mongoose';
import { DATABASE_CONNECTION, USER_MODEL } from 'src/constants';
import { UserSchema } from 'src/database/schemas/users/user.schema';

export const usersProvider = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) => 
      connection.model('User', UserSchema),
    inject: [DATABASE_CONNECTION],
  },
];
