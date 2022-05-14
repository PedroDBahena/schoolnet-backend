import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TEACHER_MODEL } from 'src/constants';
import { CreateTeacherDto } from 'src/dto/teachers/create-teacher.dto';
import { Teacher } from 'src/interfaces/teachers/teacher.interface';

@Injectable()
export class TeachersService {
  constructor(@Inject(TEACHER_MODEL) private teacherModel: Model<Teacher>) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const createdTeacher = new this.teacherModel(createTeacherDto);
    return createdTeacher.save();
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherModel.find().exec();
  }
}
