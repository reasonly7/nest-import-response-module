import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { ResponseData } from './ResponseData';

@Injectable()
class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  intercept(_context: ExecutionContext, next: CallHandler<T>): Observable<any> {
    return next.handle().pipe(
      map((data: unknown) => {
        if (data instanceof ResponseData) {
          return {
            ...data,
            success: true,
          };
        }
        return {
          data: data || null,
          message: null,
          code: 200,
          success: true,
        };
      }),
    );
  }
}

export const ResponseInterceptorProvider = {
  provide: APP_INTERCEPTOR,
  useClass: ResponseInterceptor,
};
