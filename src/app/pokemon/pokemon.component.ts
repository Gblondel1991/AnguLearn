import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { resolve, reject } from 'q';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokeName : string;
  @Input() pokeStatus : string;
  @Input() imageUrl : string;
  @Input() pokeDescription : string;
  @Input() pokeScore : number;
  @Input() indexOfPokemon : number;
  @Input() id : number;
  name : string = 'https://fontmeme.com/permalink/180822/d0032b02738caa759b8faf2bf623b935.png'

  Catched = new Date();

  constructor(private pokemonService: PokemonService,
              private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.title = this.name;
  }

  getStatus() {
    return this.pokeStatus  
  }

  getColor() {
    if (this.pokeStatus === 'possessed' && this.pokeName === "Charmander") {
      return '#FF8601';
    }
    else if (this.pokeStatus === 'possessed' && this.pokeName === "Bulbasaur") {
      return '#7CBEB3';
    }
    else if (this.pokeStatus === 'possessed' && this.pokeName === "Squirtle") {
      return '#84CABF';
    }
    else if (this.pokeStatus === 'possessed') {
      return '#FFCD00'
    }
    
    else {
      return 'black';
    }
  }

  onVotePlus() {
    this.pokemonService.increaseScore(this.indexOfPokemon);
  }

  onVoteLess() {
    this.pokemonService.decreaseScore(this.indexOfPokemon);
  }

  onSwitchStatus() {
    this.pokemonService.switchStatus(this.indexOfPokemon);
  }
}
