import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { CertificationStatus } from '../common/enums/certification-status.enum';
import { v4 as uuidv4 } from 'uuid';
import * as QRCode from 'qrcode';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CertificationsService {
  constructor(private prisma: PrismaService) {}

  private readonly select = {
    id: true,
    certificateNo: true,
    title: true,
    description: true,
    holderName: true,
    holderEmail: true,
    grade: true,
    hours: true,
    issuedAt: true,
    expiresAt: true,
    status: true,
    qrToken: true,
    qrImage: true,
    certificateImage: true,
    createdAt: true,
    updatedById: true,
    updatedBy:{
      select: { id: true, name: true },
    },
    issuedBy: true,
    issuedByUser:{
      select: { id: true, name: true },
    },
    institution: {
      select: { id: true, name: true },
    },
  };

  private generateCertificateNo(): string {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, '0');
    return `CERT-${year}-${random}`;
  }
  private async generateUniqueQrToken(): Promise<string> {
    let qrToken: string;
    let exists: boolean;

    do {
      qrToken = uuidv4();
      const found = await this.prisma.certification.findUnique({
        where: { qrToken },
      });
      exists = !!found;
    } while (exists); // keep generating until unique

    return qrToken;
  }
  private async generateQRCode(qrToken: string): Promise<string> {
    const uploadsDir = path.join(process.cwd(), 'uploads', 'qrcodes');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const fileName = `${qrToken}.png`;
    const filePath = path.join(uploadsDir, fileName);

     // encode a URL not just the token
    const verifyUrl = `${process.env.APP_URL}/certifications/verify/${qrToken}`;

    await QRCode.toFile(filePath, verifyUrl, {
      width: 300,
      margin: 2,
    });

    return `uploads/qrcodes/${fileName}`;
  }

  async create(dto: CreateCertificationDto, userId: number, certificateFile?: Express.Multer.File) {
    const institution = await this.prisma.institution.findUnique({
      where: { id: dto.institutionId },
    });
    if (!institution) throw new NotFoundException('Institution not found');



    const qrToken = await this.generateUniqueQrToken();
    const qrImage = await this.generateQRCode(qrToken);

    const certificateImage = certificateFile
      ? `uploads/certificates/${certificateFile.filename}`
      : null;

    return this.prisma.certification.create({
      data: {
        ...dto,
        issuedAt: new Date(dto.issuedAt),
        expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : null,
        status: CertificationStatus.UNDER_REVIEW,
        qrToken,
        qrImage,
        issuedBy: userId,
        certificateImage,
        certificateNo: this.generateCertificateNo(),
      },
      select: this.select,
    });
  }

  async findAll() {
    return this.prisma.certification.findMany({
      select: this.select,
    });
  }

  async findOne(id: number) {
    const certification = await this.prisma.certification.findUnique({
      where: { id },
      select: this.select,
    });

    if (!certification) throw new NotFoundException('Certification not found');

    return certification;
  }

  async update(id: number, dto: UpdateCertificationDto, user: any, certificateFile?: Express.Multer.File) {
    await this.findOne(id);
    console.log("_______", user);
    

    const data: any = Object.fromEntries(
      Object.entries(dto).filter(([_, v]) => v !== undefined),
    );

    if (data.issuedAt) data.issuedAt = new Date(data.issuedAt);
    if (data.expiresAt) data.expiresAt = new Date(data.expiresAt);
    // block status update for non-admin
    if (data.status && user.role !== 'ADMIN')
      throw new ForbiddenException('Only admin can update certification status');

    if (data.institutionId) {
      const institution = await this.prisma.institution.findUnique({
        where: { id: data.institutionId },
      });
      if (!institution) throw new NotFoundException('Institution not found');
    }

    if (certificateFile) {
      data.certificateImage = `uploads/certificates/${certificateFile.filename}`;
    }

    if (!Object.keys(data).length)
      throw new BadRequestException('No fields to update');

    return this.prisma.certification.update({
      where: { id },
      data:{
        ...data,
        updatedById: user.sub
      },
      select: this.select,
    });
  }

  async updateStatus(id: number, dto: UpdateStatusDto, userId: number) {
    await this.findOne(id);

    return this.prisma.certification.update({
      where: { id },
      data: { status: dto.status,
        updatedById: userId
       },
      select: this.select,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.certification.delete({ where: { id } });
    return { message: 'Certification deleted successfully' };
  }
}