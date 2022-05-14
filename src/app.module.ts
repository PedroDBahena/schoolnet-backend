import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './modules/teachers/teachers.module';
import { TeachersController } from './controllers/teachers/teachers.controller';
import { TeachersService } from './services/teachers/teachers.service';

@Module({
  imports: [TeachersModule],
  controllers: [AppController, TeachersController],
  providers: [AppService, TeachersService],
})
export class AppModule {}
