import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';

import { PokemonService } from './services/pokemon.service';
import { AuthComponent } from './auth/auth.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { TitleService } from './services/title.service';
import { ChangesService } from './services/changes.service';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceService } from './services/experience.service';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { SingleExperienceComponent } from './single-experience/single-experience.component';
import { ExperienceViewComponent } from './experience-view/experience-view.component';

const appRoutes: Routes = [
  { path: 'pokemons', canActivate: [AuthGuard], component: PokemonViewComponent},
  { path: 'pokemons/:id', canActivate: [AuthGuard], component: SinglePokemonComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'home', component: HomeComponent },
  { path: 'add-pokemon', canActivate: [AuthGuard], component: AddPokemonComponent },
  { path: 'add-user', canActivate: [AuthGuard], component: AddUserComponent },
  { path: 'users', canActivate: [AuthGuard], component: UserListComponent },
  { path: 'experiences', component: ExperienceViewComponent },
  { path: 'experiences/:id', component:SingleExperienceComponent },
  { path: 'add-experience', canActivate: [AuthGuard], component: AddExperienceComponent },
  { path: '', component: HomeComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    AuthComponent,
    PokemonViewComponent,
    SinglePokemonComponent,
    FourOhFourComponent,
    HomeComponent,
    AddPokemonComponent,
    UserListComponent,
    AddUserComponent,
    ExperiencesComponent,
    AddExperienceComponent,
    SingleExperienceComponent,
    ExperienceViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ClickOutsideModule,
    HttpClientModule
  ],
  providers: [
    PokemonService,
    AuthService,
    AuthGuard,
    UserService,
    DataService,
    TitleService,
    ChangesService,
    ExperienceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
