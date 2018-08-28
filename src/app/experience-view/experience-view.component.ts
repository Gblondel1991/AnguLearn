import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperienceService } from '../services/experience.service';
import { ChangesService } from '../services/changes.service';
import { Experiences } from '../models/experiences.model'
import { Experience } from '../models/experience.model'

@Component({
  selector: 'app-experience-view',
  templateUrl: './experience-view.component.html',
  styleUrls: ['./experience-view.component.scss']
})
export class ExperienceViewComponent implements OnInit {
  
  experiences: Experience[];
  
  changes : boolean = this.changesService.changes;
  experienceSubscription: Subscription;

  constructor(private experienceService : ExperienceService, private changesService : ChangesService) {}
  ngOnInit() {
    this.experienceSubscription = this.experienceService.experienceSubject.subscribe(
      (experiences: Experience[]) => {
        this.experiences = experiences ;
      }
    );
    this.experienceService.emitExperiences();
    this.experienceService.getExperienceFromServer();
    // // if (this.changesService.changes == false) {
    // //   this.experienceService.getExperienceFromServer();
    // }
  }

  onSave() {
    this.experienceService.saveExperienceToServer();
    this.changes = false;
  }

  onFetch() {
    this.experienceService.getExperienceFromServer();
  }
  
  deleteEntry(id:number){
    let deletedEntry = this.experiences.splice(id,1);
    console.log(this.experiences + "I deleted " + deletedEntry)
  }
}