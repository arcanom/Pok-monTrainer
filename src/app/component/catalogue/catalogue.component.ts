import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
list : Pokemon
listPokemon : any[] = []
names: any[] = []

  constructor( private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.getPokemon()

  }
  getPokemon(){
    this.pokemonService.getPokemon().subscribe((pokemon)=>{
      this.list = pokemon

      this.listPokemon = [this.list.results]
      //console.log(this.listPokemon);
      for(let i = 0; i<this.listPokemon.length;i++){
        console.log(this.listPokemon[i])
      }
      

    })
  }

}
