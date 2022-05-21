import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_MODEL } from 'src/constants';
import { AuthDto } from 'src/dto/auth/auth.dto';
import { User } from 'src/interfaces/users/user.interface';

@Injectable()
export class AuthService {
  constructor(@Inject(USER_MODEL) private userModel: Model<User>) {}

  async login(authDto: AuthDto): Promise<User> {
    const { email, password } = authDto;

    const userFound = await this.userModel.findOne({ email: email });

    return userFound;
  }
}
