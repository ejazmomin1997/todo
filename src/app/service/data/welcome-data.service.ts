import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

export class HelloWorldBean {
  constructor(public message: String){
    
  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeWelcomeHelloBean(){
    return this.http.get<HelloWorldBean>("http://localhost:8081/hello-world-bean")
    
  }

  executeWelcomeWithPathVariable(name){
    let basicAuthenticationHeader = this.createBasicAuthenticationHeader()
    let headers = new HttpHeaders(
      {
        Authorization: basicAuthenticationHeader
      }
    )
    return this.http.get<HelloWorldBean>(`http://localhost:8081/hello-world/pathVariable/${name}`,
    {headers});
  }

  createBasicAuthenticationHeader(){
    let username = 'user'
    let password = 'user'
    let basicAuthenticationHeader = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthenticationHeader

  }
}
