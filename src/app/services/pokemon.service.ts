export class PokemonService {
    pokemons = [
        {
          name: 'Bulbasaur',
          status: 'met',
          description: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.',
          image: 'http://media.topito.com/wp-content/uploads/2015/05/pokebulbi-250x250.png',
          score: 0
        },
        {
          name: 'Charmander',
          status: 'possessed',
          description: 'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.',
          image: 'https://www.pokebip.com/pokedex-images/artworks/4.png',
          score: 0
        },
        {
          name: 'Squirtle',
          status: 'unknown',
          description: 'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.',
          image: 'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/250px-Carapuce-RFVF.png',
          score: 0
        }
      ]

      switchCatchedAll() {
          for(let pokemon of this.pokemons) {
              pokemon.status = 'possessed'
          }
      }

      switchUncatchedAll() {
          for(let pokemon of this.pokemons) {
              pokemon.status = 'unknown'
          }
      }
}