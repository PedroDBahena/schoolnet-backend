import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthDto } from 'src/dto/auth/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() authDto: AuthDto, @Res() response) {
    const user = await this.authService.login(authDto);

    if (user) {
      return response
        .status(HttpStatus.ACCEPTED)
        .send({ message: 'User found', user });
    } else {
      return response
        .status(HttpStatus.NOT_FOUND)
        .send({ message: 'User not found' });
    }
  }
}
