import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateTeacherDto } from 'src/dto/teachers/create-teacher.dto';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersServices: TeachersService) {}

  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto, @Res() response) {
    const teacher = await this.teachersServices.create(createTeacherDto);

    let message = teacher ? 'Teacher saved' : 'Error to save the teacher';
    return response.status(HttpStatus.CREATED).send({ message, teacher });
  }
}
