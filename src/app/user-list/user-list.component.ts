import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  userSubscription: Subscription;
  title: string = "https://fontmeme.com/permalink/180822/200c441d6ee9020d82475724dba5946a.png";

  constructor(private userService: UserService, private titleSerice: TitleService) { }

  ngOnInit() {
    this.titleSerice.title = this. title;
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy(): void {
   this.userSubscription.unsubscribe();
  }
}
