import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { user, user_model } from './schema/user.schema';
import mongoose from 'mongoose';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(user_model)
    private userModel: mongoose.Model<user>
  ) { }

  async registerUser(registerDto: RegisterDto) {

    const { name, email, password } = registerDto;

    const userInfo = await this.userModel.findOne({ email });

    if (userInfo) {
      throw new ConflictException('Email already exists');
    } else {

      const newUser = await this.userModel({
        name: name,
        email: email,
        password: await bcrypt(password)
      });

      await newUser.save();
    }

    return 'This action adds a new auth';
  }

  async loginUser(loginDto: LoginDto) {
    return 'This action adds a new auth';
  }
}
