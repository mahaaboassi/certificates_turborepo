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
import { InstitutionsService } from './institution.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Post()
  create(@Body() dto: CreateInstitutionDto, @Request() req) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.institutionsService.create(dto, req.user.sub);
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
  update(
    @Param('id') id: string,
    @Body() dto: UpdateInstitutionDto,
    @Request() req,
  ) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    console.log("heree", req.user);
    
    return this.institutionsService.update(+id, dto, req.user.sub);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    if (req.user.role !== 'ADMIN')
      throw new ForbiddenException('Access denied');
    return this.institutionsService.remove(+id);
  }
}