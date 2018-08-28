import { resolve } from "url";
import { PokemonService } from './pokemon.service';
import { Input } from "@angular/core";

export class AuthService {
    @Input() isAuth = false;
    @Input() inLoad = false;
    @Input() outLoad = false;
  
    SignInLoad() {
        this.inLoad = true;
    }

    SignOutLoad() {
        this.outLoad = true;
    }

    SignIn() {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.isAuth = true;
                        this.inLoad = false;
                        resolve(true);
                    }, 2500
                )
            }
        )
    }

    SignOut() {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.isAuth = false;
                        this.outLoad = false;
                        resolve(true);
                    }, 2500
                )
            }
        )
    }
}