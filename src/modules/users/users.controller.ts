import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserDto } from 'src/dto/users/user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() userDto: UserDto, @Res() response) {
    const user = await this.usersService.create(userDto);

    let message = user ? 'User saved' : 'Error to save the user';
    return response.status(HttpStatus.CREATED).send({ message, user });
  }

  @Get()
  async findAll(@Res() response) {
    const users = await this.usersService.findAll();

    return response.status(HttpStatus.ACCEPTED).send({ users });
  }
}
