import { Component, OnInit, Input } from '@angular/core';
import { TitleService } from '../services/title.service';
import { Experience } from '../models/experience.model';
import { ExperienceService } from '../services/experience.service';
import { Subscription } from '../../../node_modules/rxjs';
import { ChangesService } from '../services/changes.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  // @Input() experienceTitle : string ;
  // @Input() username: string;
  // @Input() preferedVersion: string;
  // @Input() content: string;
  // @Input() date : Date;
  @Input() indexOfExperience : number;
  // @Input() id : number;
  @Input() experience : Experience;

  title : string = 'https://fontmeme.com/permalink/180823/ca9d75af3e37a81da2d17e8425a31108.png';
  experienceSubscription: Subscription;
  changes : boolean = this.changesService.changes;


  constructor(private titleService : TitleService, private experienceService : ExperienceService, private changesService : ChangesService) { }

  ngOnInit() {
    this.titleService.title = this.title;
  //   this.experienceSubscription = this.experienceService.experienceSubject.subscribe(
  //     (experiences: Experience[]) => {
  //       this.experiences = experiences;
  //     }
  //   );
  // this.experienceService.emitExperiences();
}

  // onSave() {
  //   this.experienceService.saveExperienceToServer();
  //   this.changes = false;
  // }
}
