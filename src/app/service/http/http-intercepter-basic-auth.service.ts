import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username = 'user'
    let password = 'user'
    let basicAuthenticationHeader = 'Basic ' + window.btoa(username + ':' + password);

    request.clone(
      {
        setHeaders :{
          Authorization : basicAuthenticationHeader
        }
      }

    )
    return next.handle(request)
  }
}
