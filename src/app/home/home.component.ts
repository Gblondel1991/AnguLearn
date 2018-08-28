import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService,
              private titleService: TitleService) {  }

  name : string = 'https://fontmeme.com/permalink/180822/7623d8148d2915c326c99cff1892f7bd.png'

  ngOnInit() {
    this.titleService.title = this.name;
   // this.dataService.notifyAllSubscribers(this.name);
  }

}