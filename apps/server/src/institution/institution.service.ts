import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnprocessableEntityException
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';

@Injectable()
export class InstitutionsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateInstitutionDto, userId: number) {
    const existing = await this.prisma.institution.findUnique({
      where: { name: dto.name },
    });
    if (existing) throw new UnprocessableEntityException('Institution already exist');

    return this.prisma.institution.create({
      data: {
        ...dto,
        createdById: userId,
      },
      select: {
        id: true,
        name: true,
        logo: true,
        website: true,
        address: true,
        status: true,
        createdAt: true,
        createdBy: {
          select: { id: true, name: true },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.institution.findMany({
      select: {
        id: true,
        name: true,
        logo: true,
        website: true,
        address: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        createdBy: {
          select: { id: true, name: true },
        },
        updatedBy: {
          select: { id: true, name: true },
        },
      },
    });
  }

  async findOne(id: number) {
    const institution = await this.prisma.institution.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        logo: true,
        website: true,
        address: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        createdBy: {
          select: { id: true, name: true },
        },
        updatedBy: {
          select: { id: true, name: true },
        },
      },
    });

    if (!institution) throw new NotFoundException('Institution not found');

    return institution;
  }

  async update(id: number, dto: UpdateInstitutionDto, userId: number) {
    await this.findOne(id);
    
    const data = Object.fromEntries(
      Object.entries(dto).filter(([_, v]) => v !== undefined),
    );

    if (!Object.keys(data).length)
      throw new BadRequestException('No fields to update');

    return this.prisma.institution.update({
      where: { id },
      data: {
        ...data,
        updatedById: userId,
      },
      select: {
        id: true,
        name: true,
        logo: true,
        website: true,
        address: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        createdBy: {
          select: { id: true, name: true },
        },
        updatedBy: {
          select: { id: true, name: true },
        },
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.institution.delete({ where: { id } });
    return { message: 'Institution deleted successfully' };
  }
}