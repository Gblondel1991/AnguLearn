import { Experience } from "../models/experience.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ChangesService } from "./changes.service";

@Injectable()
export class ExperienceService {
    constructor(private httpClient: HttpClient, private changesService: ChangesService) {}
    private experiences : Experience[] = [
        // {
        //     username : 'Francis',
        //     content : 'Lallane',
        //     preferedVersion: 'Yellow',
        //     title : 'Around my hairs',
        //     date: new Date,
        //     id: 0
        // }
    ];
    changes : boolean = this.changesService.changes;

    experienceSubject = new Subject<Experience[]>();
    
    emitExperiences() {
        this.experienceSubject.next(this.experiences.slice());
    }

    addExperience(username : string, title :string, content:string, preferedVersion: string, date: Date) {
        const ExperienceObject = {
            username : '',
            title : '',
            content : '',
            preferedVersion : '',
            date,
            id :0
        };
        ExperienceObject.username = username;
        ExperienceObject.title = title;
        ExperienceObject.content = content;
        ExperienceObject.preferedVersion = preferedVersion;
        ExperienceObject.id = this.experiences[(this.experiences.length - 1)].id + 1;;
        this.experiences.push(ExperienceObject);
        this.emitExperiences();
    }    

    getExperienceById(id: number) {
        const experience = this.experiences.find(
            (ExperienceObject) => {
                return ExperienceObject.id === id;
            }
        )
        return experience;
    }
    // deleteExperience(index : number) {
    //     this.getExperienceById(index)
    //     .('https://angulearn.firebaseio.com/experiences.json', this.experiences[index].id)
    // }

    saveExperienceToServer() {
        this.httpClient
        .put('https://angulearn.firebaseio.com/experiences.json', this.experiences)
        .subscribe(
            () => {
                console.log('Enregistrement terminé');
            },
            (error) => {
                console.log('Erreur de sauvegarde' + error)
            }
        )
    }

    getExperienceFromServer() {
        this.httpClient
            .get<any[]>('https://angulearn.firebaseio.com/experiences.json')
            .subscribe(
                (response) => {
                    this.experiences = response;
                    this.emitExperiences();
                    console.log('Chargement réussi');
                },
                (error) => {
                    console.log('Erreur de chargement' + error);
                }
            )
    }
}
