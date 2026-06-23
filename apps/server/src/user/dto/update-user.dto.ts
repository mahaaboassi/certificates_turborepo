import { IsString, IsOptional, IsEnum } from 'class-validator';

enum UserRole {
  ADMIN = 'ADMIN',
  SUPERVISOR = 'SUPERVISOR',
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(UserRole, { message: 'Role must be ADMIN or SUPERVISOR' })
  role?: UserRole;

  @IsOptional()
  @IsString()
  password?: string;
}