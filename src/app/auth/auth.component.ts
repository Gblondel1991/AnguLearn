import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TitleService } from '../services/title.service';
import { PokemonService } from '../services/pokemon.service';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  loadInStatus: boolean;
  loadOutStatus: boolean;
  name : string = 'https://fontmeme.com/permalink/180822/4272544d8e3b99eb36d1662c512fe01c.png'

  constructor(private authService: AuthService, private router: Router, private titleService: TitleService, private pokemonService : PokemonService, private experienceService : ExperienceService) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    this.loadInStatus = this.authService.inLoad;
    this.loadOutStatus = this.authService.outLoad;
    this.titleService.title = this.name;
  }

  onSignIn() {
    this.authService.SignIn().then(
      () => {
        this.authStatus = this.authService.isAuth;
        this.loadInStatus = this.authService.inLoad;
        this.router.navigate(['pokemons']);
      }
    )
  }
  
  onSignOut() {
    this.authService.SignOut().then(
      () => {
    this.authStatus = this.authService.isAuth;
    this.router.navigate(['home']);
      }
    )
  }
  
  onSignInLoad() {
    this.authService.SignInLoad();
    this.loadInStatus = this.authService.inLoad;
  }

  onSignOutLoad() {
    this.authService.SignOutLoad();
    this.loadOutStatus = this.authService.outLoad;
  }
}
