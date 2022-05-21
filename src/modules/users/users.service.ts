import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_MODEL } from 'src/constants';
import { UserDto } from 'src/dto/users/user.dto';
import { User } from 'src/interfaces/users/user.interface';

@Injectable()
export class UsersService {
  constructor(@Inject(USER_MODEL) private userModel: Model<User>) {}

  async create(userDto: UserDto): Promise<User> {
    const userCreated = new this.userModel(userDto);
    return userCreated.save();
  }
}
