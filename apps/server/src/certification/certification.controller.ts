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
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CertificationsService } from './certification.service';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

const certificateStorage = diskStorage({
  destination: './uploads/certificates',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `cert-${uniqueSuffix}${extname(file.originalname)}`);
  },
});

@UseGuards(JwtAuthGuard)
@Controller('certifications')
export class CertificationsController {
  constructor(private readonly certificationsService: CertificationsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('certificateImage', { storage: certificateStorage }))
  create(
    @Body() dto: CreateCertificationDto,
    @Request() req,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (req.user.role !== 'ADMIN' && req.user.role !== 'SUPERVISOR')
      throw new ForbiddenException('Access denied');
    return this.certificationsService.create(dto, req.user.sub, file);
  }

  @Get()
  findAll() {
    return this.certificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificationsService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('certificateImage', { storage: certificateStorage }))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCertificationDto,
    @Request() req,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (req.user.role !== 'ADMIN' && req.user.role !== 'SUPERVISOR')
      throw new ForbiddenException('Access denied');
    return this.certificationsService.update(+id, dto, req.user, file);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateStatusDto,
    @Request() req,
  ) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.certificationsService.updateStatus(+id, dto, req.user.sub);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.certificationsService.remove(+id);
  }
}