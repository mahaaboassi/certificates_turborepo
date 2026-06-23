import {
  IsString,
  IsOptional,
  IsInt,
  IsEmail,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCertificationDto {
  @Type(() => Number)
  @IsInt()
  institutionId!: number;

  @IsString()
  holderName!: string;

  @IsEmail()
  holderEmail!: string;

  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  issuedAt!: string;

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
}