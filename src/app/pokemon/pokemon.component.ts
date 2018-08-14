import { Component, OnInit, Input } from '@angular/core';
import { resolve, reject } from '../../../node_modules/@types/q';

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

  Catched = new Date();

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.pokeStatus  
  }

  getColor() {
    if (this.pokeStatus === 'possessed') {
      return 'red';
    }
    else {
      return 'black';
    }
  }

  increaseScore() {
    this.pokeScore ++;
    console.log(this.pokeScore);
  }

  decreaseScore() {
    this.pokeScore --;
    console.log(this.pokeScore);
  }
}
