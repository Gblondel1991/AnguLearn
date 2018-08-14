import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;

  pokemons: any[];

  constructor(private PokemonService: PokemonService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.pokemons = this.PokemonService.pokemons
  }

  onCatch() {
    this.PokemonService.switchCatchedAll();
  }

  onUncatch() {
    this.PokemonService.switchUncatchedAll();
  }
}