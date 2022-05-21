import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from 'src/dto/auth/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post()
  async login(@Body() authDto: AuthDto, @Res() response) {
    const user = await this.authService.login(authDto);

    const accessToken = this.jwtService.sign({ user });

    if (user) {
      return response
        .status(HttpStatus.ACCEPTED)
        .send({ message: 'User found', user, accessToken });
    } else {
      return response
        .status(HttpStatus.NOT_FOUND)
        .send({ message: 'User not found' });
    }
  }
}
