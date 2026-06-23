import { Module } from '@nestjs/common';
import { InstitutionsService } from './institution.service';
import { InstitutionsController } from './institution.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InstitutionsController],
  providers: [InstitutionsService],
  exports: [InstitutionsService],
})
export class InstitutionsModule {}