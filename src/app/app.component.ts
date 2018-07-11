///<reference path="message-types.enum.ts"/>
import {Component, OnInit} from '@angular/core';
import {EventBusService} from './eventbus/event-bus.service';
import {MessageTypes} from './message-types.enum';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {

  title$: Observable<string>;

  constructor(private eventBusService: EventBusService) {
  }

  ngOnInit(): void {
    this.title$ = this.eventBusService.observe(MessageTypes.APP_TITLE_CHANGE);

  }
}
