import { IsString, IsOptional, IsBoolean, IsUrl } from 'class-validator';

export class CreateInstitutionDto {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  logo?: string;

  @IsOptional()
  @IsUrl()
  website?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;
}