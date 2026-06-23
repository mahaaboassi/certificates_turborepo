// UnauthorizedException 401
// Not logged in / bad credentialsForbiddenException 403
// Logged in but no permissionNotFoundException 404
// Resource not foundUnprocessableEntityException 422
// Valid format but can't process (duplicate email, business rule violation)ConflictException 409
// Resource already existsBadRequestException 400
// Malformed request
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    const errorMessage =
      typeof message === 'string'
        ? message
        : (message as any).message ?? 'Something went wrong';

    const msg = Array.isArray(errorMessage)
      ? errorMessage.join(', ')
      : errorMessage;

    response.status(status).json({
      err: 1,
      data: [],
      msg,
      statusCode: status,
    });
  }
}
