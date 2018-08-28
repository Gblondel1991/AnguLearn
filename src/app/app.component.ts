import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';
import { DataService } from './services/data.service';
import { cpus } from 'os';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  seconds: number;
  counterSubscription: Subscription;
  status : boolean = true;
  status1 : boolean = true;
  title : string;
  title1 : string;

 constructor(private dataService: DataService,
              private titleService: TitleService) { }

 ngOnInit() {
   const counter = Observable.interval(1000);
   this.counterSubscription = counter.subscribe(
     (value: number) => {
       this.seconds = value;
     }
    );

    this.dataService.subscribe(this);
  };

  getTitle(title : string) {
    console.log(title);
    this.title1 = title;
  }

  notify(title:string){
    this.title = title;
  };

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }


}