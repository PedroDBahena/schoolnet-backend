import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { TeachersController } from './controllers/teachers/teachers.controller';
import { TeachersService } from './services/teachers/teachers.service';

@Module({
  imports: [DatabaseModule, TeachersModule],
  controllers: [AppController, TeachersController],
  providers: [AppService, TeachersService],
})
export class AppModule {}
