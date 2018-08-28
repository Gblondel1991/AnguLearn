import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';
import { Router } from '@angular/router';
import { ExperienceService } from '../services/experience.service';
import { NgForm } from '@angular/forms';
import { ChangesService } from '../services/changes.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

  defaultStatus="Yellow";
  title = "https://fontmeme.com/permalink/180824/3c1d113e0e2c41a6b210db744547b58b.png"

  constructor(private titleService : TitleService, private router : Router, private experienceService : ExperienceService, private changesService: ChangesService) { }

  ngOnInit() {
    this.titleService.title = this.title;
  }

  onSubmit(form: NgForm) {
    const username = form.value['username'];
    const title = form.value['title'];
    const content = form.value['content'];
    const preferedVersion = form.value['preferedVersion'];
    const date = new Date;
    this.experienceService.addExperience(username, title, content, preferedVersion, date);
    this.router.navigate(['/experiences']);
    this.changesService.changes = true;
  }
}