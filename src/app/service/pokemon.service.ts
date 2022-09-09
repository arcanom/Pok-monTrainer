import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url : string = "https://pokeapi.co/api/v2/pokemon?limit=251"
  constructor(private http: HttpClient) { }

  getPokemon():Observable<Pokemon>{
    return this.http.get<Pokemon>(this.url)
  }
}
