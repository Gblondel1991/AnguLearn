import { User } from "../models/user.model";
import { Subject } from "rxjs";

export class UserService {
    private users: User[] = [
        {
            firstname: 'Ash',
            lastname: 'Ketchum',
            email: 'Ash@pokemon.com',
            image: 'https://orig00.deviantart.net/5888/f/2016/098/5/2/ash_ketchum_by_seanklaskyn64-d9y7tzy.png',
            pokemonImage: 'https://static.giantbomb.com/uploads/scale_medium/0/6087/2437349-pikachu.png'
        },
        {
            firstname: 'Gary',
            lastname: 'Oak',
            email: 'Gary@pokemon.com',
            image: 'https://img00.deviantart.net/a7c6/i/2016/260/b/3/pokemon_gary_oak_by_lucario_strike-dahzddp.png',
            pokemonImage: 'http://static.hitek.fr/img/actualite/2015/03/m50-61iqg14tc.png'
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}