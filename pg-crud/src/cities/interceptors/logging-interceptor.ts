import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;

    console.log(`[Request] ${method} ${url}`);
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        console.log(`[Response] ${method} ${url} - ${Date.now() - now}ms`);
      }),
    );
  }
}
