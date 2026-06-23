import { IsEmail, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';
enum UserRole {
  ADMIN = 'ADMIN',
  SUPERVISOR = 'SUPERVISOR',
}

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsOptional()
  @IsEnum(UserRole, { message: 'Role must be ADMIN or SUPERVISOR' })
  role: UserRole = UserRole.SUPERVISOR;
}