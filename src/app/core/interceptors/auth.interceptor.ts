import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const shouldIntercept = req.urlWithParams.indexOf('addAuth=true', 0) > -1 ? true : false;
  if (shouldIntercept) {
    const token = inject(AuthService).getAuthorizationToken();
    const authReq = req.clone({
      headers: req.headers.set('Authorization', token)
    })
    console.log(authReq.headers)
    return next(authReq);
  }
  return next(req);
};
