import { Module } from '@nestjs/common';
import { teachersProvides } from 'src/providers/teachers/teachers.provides';
import { DatabaseModule } from '../database/database.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, ...teachersProvides],
})
export class AuthModule {}
