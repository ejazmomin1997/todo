import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    console.log('before' + this.userLoggedIn());
    if(username === 'ejazMomin' && password === '123'){
      sessionStorage.setItem('authenticateUser', username)
      console.log('after'+this.userLoggedIn())
      return true;
     
    }
    return false;
  }

  userLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}

