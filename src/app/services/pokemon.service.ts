import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PokemonService {

    pokemonSubject = new Subject<any[]>();

    private pokemons = [] = [];

      constructor(private httpClient: HttpClient) {}

      emitPokemonSubject() {
          this.pokemonSubject.next(this.pokemons.slice());
      }

      getPokemonById(id: number) {
          const pokemon = this.pokemons.find(
              (pokemonObject) => {
                  return pokemonObject.id === id;
              }
          )
          return pokemon;
      }

      switchCatchedAll() {
          for(let pokemon of this.pokemons) {
              pokemon.status = 'possessed';
              this.emitPokemonSubject();
          }
      }

      switchUncatchedAll() {
          for(let pokemon of this.pokemons) {
              pokemon.status = 'unknown';
              this.emitPokemonSubject();
          }
      }

      increaseScore(index : number) {
        this.pokemons[index].score ++;
        console.log(this.pokemons[index].score);
      }

      decreaseScore(index: number) {
          this.pokemons[index].score --;
      }

      switchStatus(index: number) {
        {
            if (this.pokemons[index].status == 'possessed') {
                this.pokemons[index].status = 'unknown';
                this.emitPokemonSubject();
            }
            else if (this.pokemons[index].status == 'unknown') {
                this.pokemons[index].status = 'met';
                this.emitPokemonSubject();
            }
            else {
                this.pokemons[index].status = 'possessed';
                this.emitPokemonSubject();
            }
        }
    }

    addPokemon(name : string, status : string, image : string, description : string, score : number) {
        const pokemonObject = {
            name : '',
            status : '',
            image : '',
            description : '',
            id : 0,
            score: 0
        };
        pokemonObject.name = name;
        pokemonObject.status = status;
        pokemonObject.image = image;
        pokemonObject.description = description;
        pokemonObject.id = this.pokemons[(this.pokemons.length - 1)].id + 1;
        pokemonObject.score = score;
        this.pokemons.push(pokemonObject);
        this.emitPokemonSubject();
    }

    // deletePokemon(index) {
    //     this.pokemons[index].httpClient.patch("https://angulearn.firebaseio.com/pokemons/'index'.json")
    //     .subscribe(
    //         data => {
    //             console.log('deleted', data)
    //         },
    //         error => {
    //             console.log('Error', error)
    //         }
    //     )
    // }

    savePokemonstoServer() {
        this.httpClient
        .put('https://angulearn.firebaseio.com/pokemons.json', this.pokemons)
        .subscribe(
            () => {
                console.log('Enregistrement terminé');
            },
            (error) => {
                console.log('Erreur de sauvegarde' + error)
            }
        )
    }

    getPokemonfromServer() {
        this.httpClient
            .get<any[]>('https://angulearn.firebaseio.com/pokemons.json')
            .subscribe(
                (response) => {
                    this.pokemons = response;
                    this.emitPokemonSubject();
                    console.log('Chargement réussi');
                },
                (error) => {
                    console.log('Erreur de chargement' + error);
                }
            )
    }
}