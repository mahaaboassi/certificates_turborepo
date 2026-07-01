import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
  BadRequestException
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto, userId, imageFile?: Express.Multer.File) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing) throw new UnprocessableEntityException('Email already in use');

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const userImage = imageFile
      ? `uploads/users/${imageFile.filename}`
      : null;
    return this.prisma.user.create({
      data: {
        ...dto,
        password: hashedPassword,
        createdById: userId,
        file: userImage,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        file: true,
        createdBy: {
          select: { id: true, name: true },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        file: true,
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
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        file: true,
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

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async update(id: number, dto: UpdateUserDto, userId: number, imageFile?: Express.Multer.File) {
    await this.findOne(id);

    // remove undefined fields
    const data = Object.fromEntries(
      Object.entries(dto).filter(([_, v]) => v !== undefined ),
    );

    if (!Object.keys(data).length && !imageFile) {
      throw new BadRequestException('No fields to update');
    }

    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }

    const updateData: any = {
      ...data,
      updatedById: userId,
    };

    if (imageFile) {
      updateData.file = `uploads/users/${imageFile?.filename}`;
    }

    return  await this.prisma.user.update({
        where: { id },
        data : updateData,
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          file: true,
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
    await this.prisma.user.delete({ where: { id } });
    return { message: 'User deleted successfully' };
  }

}