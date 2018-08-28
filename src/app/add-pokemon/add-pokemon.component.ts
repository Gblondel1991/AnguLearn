import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { TitleService } from '../services/title.service';
import { ChangesService } from '../services/changes.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {

  defaultStatus="unknown";
  title = 'https://fontmeme.com/permalink/180822/f56636bb769efcfb69cae0a83aa96196.png'

  constructor(private pokemonService: PokemonService, private router: Router, private titleService: TitleService, private changesService: ChangesService) { }

  ngOnInit() {
    this.titleService.title = this.title;
  }


  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    const description = form.value['description'];
    const image = form.value['image'];
    const score = 0;
    this.pokemonService.addPokemon(name, status, image, description, score);
    this.router.navigate(['/pokemons']);
    this.changesService.changes = true;
  }
}