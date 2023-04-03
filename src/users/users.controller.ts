import { CreateUserDto } from './dtos/create-user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

type NewType = CreateUserDto;

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  createUser(@Body() body: NewType) {
    return this.userService.create(body.email, body.password);
  }
  @Get('/user')
  getUser() {
    return this.userService.find();
  }
}
