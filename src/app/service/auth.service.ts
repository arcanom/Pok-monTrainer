import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private serviceLogin : LoginService, private router : Router) { }
  canActivate() : boolean {
    if(this.serviceLogin.isLog()){
      return true
    } else {
      this.router.navigate(['get-started'])
      return false
    }
  }
}
