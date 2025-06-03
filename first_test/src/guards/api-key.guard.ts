import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['X-API-KEY'];

    if (apiKey !== 'nest-is-awesome') {
      return false;
    }

    return true;
  }
}
