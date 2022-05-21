import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_MODEL } from 'src/constants';
import { UserDto } from 'src/dto/users/user.dto';
import { User } from 'src/interfaces/users/user.interface';
import * as bcryptjs from 'bcryptjs';
@Injectable()
export class UsersService {
  constructor(@Inject(USER_MODEL) private userModel: Model<User>) {}

  async create(userDto: UserDto): Promise<User> {
    const { password } = userDto;
    // Ecriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    userDto.password = bcryptjs.hashSync(password, salt);
    const userCreated = new this.userModel(userDto);
    return userCreated.save();
  }
}
