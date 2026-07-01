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
import { InstitutionsService } from './institution.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

const institutionStorage = diskStorage({
  destination: './uploads/institutions',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
  },
});

@UseGuards(JwtAuthGuard)
@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('logo', { storage: institutionStorage }))
  create(@Body() dto: CreateInstitutionDto, @Request() req, @UploadedFile() file?: Express.Multer.File) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.institutionsService.create(dto, req.user.sub, file);
  }

  @Get()
  findAll() {
    return this.institutionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.institutionsService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('logo', { storage: institutionStorage }))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateInstitutionDto,
    @Request() req,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    console.log("heree", dto);
    
    return this.institutionsService.update(+id, dto, req.user.sub, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.institutionsService.remove(+id);
  }
}