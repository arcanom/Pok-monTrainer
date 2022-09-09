import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-headerconnect',
  templateUrl: './headerconnect.component.html',
  styleUrls: ['./headerconnect.component.scss']
})
export class HeaderconnectComponent implements OnInit {

  constructor(private loginService : LoginService, private route : Router) { }

  ngOnInit(): void {
  }

  deconnexion(){
    this.loginService.deconnect()
    this.route.navigate(['/get-started'])

  }
}
