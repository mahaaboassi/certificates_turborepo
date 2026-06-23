import { IsEnum } from 'class-validator';
import { CertificationStatus } from '../../common/enums/certification-status.enum';

export class UpdateStatusDto {
  @IsEnum(CertificationStatus, {
    message: 'Status must be ACCEPTED, UNDER_REVIEW or REJECTED',
  })
  status!: CertificationStatus;
}