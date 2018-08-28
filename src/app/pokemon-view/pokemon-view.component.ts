import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Subscription } from 'rxjs';
import { ChangesService } from '../services/changes.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {
 
   isAuth = false;
 
  pokemons: any[];
  changes : boolean = this.changesService.changes;
  pokemonSubscription: Subscription;

  constructor(private PokemonService: PokemonService, private changesService : ChangesService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.pokemonSubscription = this.PokemonService.pokemonSubject.subscribe(
      (pokemons: any[]) => {
        this.pokemons = pokemons ;
      }
    );
    this.PokemonService.emitPokemonSubject();
    this.PokemonService.getPokemonfromServer();


    // if (this.changesService.changes == false) {
    //   this.PokemonService.getPokemonfromServer();
    // }
  }

  onCatch() {
    this.PokemonService.switchCatchedAll();
    this.changes = true;
  }

  onUncatch() {
    this.PokemonService.switchUncatchedAll();
    this.changes = true;
  }

  onSave() {
    this.PokemonService.savePokemonstoServer();
    this.changes = false;
  }

  onFetch() {
    this.PokemonService.getPokemonfromServer();
  }
}
