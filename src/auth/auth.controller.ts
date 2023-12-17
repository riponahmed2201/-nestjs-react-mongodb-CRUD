import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/user/register')
  async register(@Body() registerDto: RegisterDto): Promise<{ token: string, message: string }> {
    return await this.authService.registerUser(registerDto);
  }

  @Post('/user/login')
  async login(@Body() loginDto: LoginDto): Promise<{ token: string, message: string }> {
    return await this.authService.loginUser(loginDto);
  }

}
