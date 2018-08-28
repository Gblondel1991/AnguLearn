import { Component, OnInit, Input } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-single-experience',
  templateUrl: './single-experience.component.html',
  styleUrls: ['./single-experience.component.scss']
})
export class SingleExperienceComponent implements OnInit {
  experience : Experience;

  constructor(private experienceService : ExperienceService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.experience = this.experienceService.getExperienceById(+id);
  }
}
