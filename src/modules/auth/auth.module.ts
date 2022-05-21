import { Module } from '@nestjs/common';
import { usersProvider } from 'src/providers/users/users.provider';
import { DatabaseModule } from '../database/database.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, ...usersProvider],
})
export class AuthModule {}
