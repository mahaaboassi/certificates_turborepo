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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';


const userStorage = diskStorage({
  destination: './uploads/users',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
  },
});

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: userStorage }))
  create(@Body() dto: CreateUserDto, @Request() req, 
         @UploadedFile() file?: Express.Multer.File,) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.userService.create(dto, req.user.sub, file);
  }

  @Get()
  findAll(@Request() req) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', { storage: userStorage }))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
    @Request() req,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.userService.update(+id, dto, req.user.sub, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.userService.remove(+id);
  }
}