import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { InstitutionsModule } from './institution/institution.module';
import { CertificationsModule } from './certification/certification.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, InstitutionsModule, CertificationsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
