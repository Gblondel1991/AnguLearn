import { Component, OnInit, Input, Output } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.scss']
})
export class FourOhFourComponent implements OnInit {
  title: string = 'https://fontmeme.com/permalink/180823/de3c2a68caae99c747135d5ded21894f.png';

  constructor(private titleService : TitleService) { 
  }

  ngOnInit() {
    this.titleService.title = this.title;
  }
}
