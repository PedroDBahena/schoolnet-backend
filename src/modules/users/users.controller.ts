import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UserDto } from 'src/dto/users/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userDto: UserDto, @Res() response) {
    const user = await this.usersService.create(userDto);

    let message = user ? 'User saved' : 'Error to save the user';
    return response.status(HttpStatus.CREATED).send({ message, user });
  }
}
