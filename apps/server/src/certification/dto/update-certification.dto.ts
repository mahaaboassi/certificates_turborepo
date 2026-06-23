import {
  IsString,
  IsOptional,
  IsInt,
  IsEmail,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CertificationStatus } from '../../common/enums/certification-status.enum';


export class UpdateCertificationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  institutionId?: number;


  @IsOptional()
  @IsString()
  holderName?: string;

  @IsOptional()
  @IsEmail()
  holderEmail?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  issuedAt?: string;

  @IsOptional()
  @IsDateString()
  expiresAt?: string;

  @IsOptional()
  @IsString()
  grade?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  hours?: number;

  @IsOptional()
  @IsEnum(CertificationStatus, {
    message: 'Status must be ACCEPTED, UNDER_REVIEW or REJECTED',
  })
  status?: CertificationStatus;
}