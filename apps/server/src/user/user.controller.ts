import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto, @Request() req) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.userService.create(dto, req.user.sub);
  }

  @Get()
  findAll(@Request() req) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number, @Request() req) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() dto: UpdateUserDto,
    @Request() req,
  ) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.userService.update(id, dto, req.user.sub);
  }

  @Delete(':id')
  remove(@Param('id') id: number, @Request() req) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.userService.remove(id);
  }
}