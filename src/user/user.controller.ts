import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.userService.findOne(username);
  }

  @Post('login')
  login(@Body() userDto: UserDto) {
    const { username, password } = userDto;
    return this.userService.login(username, password);
  }

  @Patch(':username')
  update(@Param('username') username: string, @Body() userDto: UserDto) {
    return this.userService.update(username, userDto);
  }

  @Delete(':username')
  delete(@Param('username') username: string) {
    return this.userService.delete(username);
  }
}
