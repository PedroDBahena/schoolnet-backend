import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AUTH_MODEL, TEACHER_MODEL } from 'src/constants';
import { Teacher } from 'src/database/schemas/teachers/teacher.schema';
import { AuthDto } from 'src/dto/auth/auth.dto';
import { Auth } from 'src/interfaces/auth/auth.interface';

@Injectable()
export class AuthService {
  constructor(@Inject(TEACHER_MODEL) private teacherModule: Model<Teacher>) {}

  async login(authDto: AuthDto): Promise<Teacher> {
    const { email, password } = authDto;

    const userFound =  this.teacherModule.findOne({ email, password });

    console.log('USER FOUND', userFound);

    return userFound;
  }
}
