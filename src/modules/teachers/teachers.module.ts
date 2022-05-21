import { Module } from '@nestjs/common';
import { TeachersController } from './teachers.controller';
import { teachersProvides } from 'src/providers/teachers/teachers.provides';
import { TeachersService } from './teachers.service';
import { DatabaseModule } from '../database/database.module';

DatabaseModule;
@Module({
  imports: [DatabaseModule],
  controllers: [TeachersController],
  providers: [TeachersService, ...teachersProvides],
  exports: [...teachersProvides],
})
export class TeachersModule {}
