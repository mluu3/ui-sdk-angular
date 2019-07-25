import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

declare var v: any;
const authSST = '';
const authTT = '';

@Injectable()
export class CustomerInterceptor implements HttpInterceptor {

  constructor() { }
  // function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // how to update the request Parameters
    const cookies = v.format('GDCAuthSST=%s; GDCAuthTT=%s', authSST, authTT);
    const updatedRequest = request.clone({
      headers: request.headers
      .set('cookie', cookies)
      .set('content-type', 'application/json' )
      .set('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.37'),
      withCredentials: true,
    });
    // logging the updated Parameters to browser's console
    console.log('Before making api call : ', updatedRequest);
    return next.handle(updatedRequest).pipe(
      tap(
        event => {
          // logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            console.log('api call success :', event);
          }
        },
        error => {
          // logging the http response to browser's console in case of a failuer
          if (event instanceof HttpResponse) {
            console.log('api call error :', event);
          }
        }
      )
    );
  }
}