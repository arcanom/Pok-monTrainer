import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string ="http://localhost:3000/user"

  constructor(private http : HttpClient) { }

  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }
}
