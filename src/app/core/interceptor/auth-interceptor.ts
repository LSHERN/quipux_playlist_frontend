import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);
  const translateService = inject(TranslateService);

  const token = sessionStorage.getItem('authToken');

  const authReq = req.clone({
    setHeaders: token ? { Authorization: Bearer ${token} } : {},
    withCredentials: true
  });

  return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorCustom: any = error.error;
        messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: translateService.instant(messages.error.${errorCustom.codeError ?? 'admin-error'}),
          life: 3000
        });
        return throwError(() => error);
      })
    );
};