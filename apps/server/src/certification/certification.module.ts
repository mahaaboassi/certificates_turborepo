import { Module } from '@nestjs/common';
import { CertificationsService } from './certification.service';
import { CertificationsController, PublicCertificationsController } from './certification.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    PrismaModule,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [CertificationsController,PublicCertificationsController],
  providers: [CertificationsService],
  exports: [CertificationsService],
})
export class CertificationsModule {}