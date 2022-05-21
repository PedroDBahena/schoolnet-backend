import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { TeachersController } from './modules/teachers/teachers.controller';
import { TeachersService } from './modules/teachers/teachers.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [DatabaseModule, TeachersModule, UsersModule],
  controllers: [AppController, TeachersController],
  providers: [AppService, TeachersService],
})
export class AppModule {}
