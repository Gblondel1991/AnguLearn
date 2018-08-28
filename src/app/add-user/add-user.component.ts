import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, RequiredValidator } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  title: string = "https://fontmeme.com/permalink/180822/e2a41a070f5b7cbe7bdf73413de5777a.png";

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.title = this.title;
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstname : ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      image: ['', Validators.required],
      pokemonImage: ['', Validators.required],
    }
    )
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstname'],
      formValue['lastname'],
      formValue['email'],
      formValue['image'],
      formValue['pokemonImage']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }
}
