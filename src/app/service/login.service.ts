import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  isLogin : boolean = false

    connect(){
      if(JSON.parse(localStorage.getItem("isLogged"))== null || undefined){
        this.isLogin = true;
        localStorage.setItem("isLogged", JSON.stringify(this.isLogin))
        this.isLogin = JSON.parse(localStorage.getItem("isLogged"))
      } else {
        console.log(this.isLogin);
      }
    }
    isLog():boolean{
      this.isLogin = JSON.parse(localStorage.getItem("isLogged"))
      console.log(this.isLogin);
      return this.isLogin


    }

    deconnect(){
      localStorage.removeItem("isLogged")
    }


  constructor() { }
}
