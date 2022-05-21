import { Module } from '@nestjs/common';
import { usersProvider } from 'src/providers/users/users.provider';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProvider],
  exports: [...usersProvider],
})
export class UsersModule {}
