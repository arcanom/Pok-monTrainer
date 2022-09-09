import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form : FormGroup
  listeUsers : User[] = []
  user : User
  listePseudo : any[] = []
  constructor(private userService : UserService,private loginService : LoginService, private fb : FormBuilder, private route : Router) { }

  ngOnInit(): void {
    this.getUser();
    this.form = this.fb.group({
      id: [""],
      pseudo: this.fb.control('',Validators.required)
    })
  }

  get id(){
    return this.form.get("id");
  }

  get pseudo(){
    return this.form.get("pseudo")
  }

  getUser(){
    this.userService.getUser().subscribe((users) =>{
      this.listeUsers = users
    })
  }
  connexion(){
    if(this.form.valid){
      this.user = this.form.value;
      this.getUser();
      this.listePseudo = this.listeUsers.map(x => x.pseudo)
      for(let i = 0;i<this.listePseudo.length;i++){
        if(this.user.pseudo == this.listePseudo[i]){
          this.loginService.connect()
          this.route.navigate(['/catalogue'])
        }
      }

    }

  }

}
