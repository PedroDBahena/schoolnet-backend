import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { TeachersController } from './modules/teachers/teachers.controller';
import { TeachersService } from './modules/teachers/teachers.service';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';
import { UsersController } from './modules/users/users.controller';

@Module({
  imports: [DatabaseModule, TeachersModule, UsersModule],
  controllers: [AppController, TeachersController, UsersController],
  providers: [AppService, TeachersService, UsersService],
})
export class AppModule {}
