import { Component, OnInit } from '@angular/core';
import {EventBusService} from '../eventbus/event-bus.service';
import {MessageTypes} from '../message-types.enum';

@Component({
  selector: 'trm-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(private eventBus: EventBusService) { }

  ngOnInit() {
    this.eventBus.emit( MessageTypes.APP_TITLE_CHANGE , 'About');
  }

}
