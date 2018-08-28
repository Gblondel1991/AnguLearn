import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { ChangesService } from '../services/changes.service';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.scss']
})
export class SinglePokemonComponent implements OnInit {

  @Input() pokeName: string = 'Pokemon';
  @Input() pokeStatus: string = 'Statut';
  @Input() imageUrl: string;
  @Input() pokeDescription: string;
  @Input() pokeScore: number;
  @Input() indexOfPokemon: number;

  Catched = new Date();

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private changesService : ChangesService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.pokeName = this.pokemonService.getPokemonById(+id).name;
    this.pokeStatus =  this.pokemonService.getPokemonById(+id).status;
    this.imageUrl = this.pokemonService.getPokemonById(+id).image;
    this.pokeDescription = this.pokemonService.getPokemonById(+id).description;
    this.pokeScore = this.pokemonService.getPokemonById(+id).score;
    this.indexOfPokemon = this.pokemonService.getPokemonById(+id).id;
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

  increaseScore() {
    this.pokeScore ++;
  }

  decreaseScore() {
    this.pokeScore --;
  }

  onSwitchStatus() {
    if (this.pokeStatus == 'possessed') {
      this.pokeStatus = 'unknown'
  }
  else if (this.pokeStatus == 'unknown') {
      this.pokeStatus = 'met';
  }
  else {
      this.pokeStatus = 'possessed';
  }
  }

  // onDelete() {
  //   this.pokemonService.deletePokemon(this.indexOfPokemon)
  // }
}