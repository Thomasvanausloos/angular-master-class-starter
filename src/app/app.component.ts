import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventBusService} from './eventbus/event-bus.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit, OnDestroy {

  title: string;
  private unsubscribe$: Subject<boolean>;

  constructor(private eventBusService: EventBusService) {
  }

  ngOnInit(): void {
    this.eventBusService.observe('appTitleChange').pipe(
      // takeUntil(this.unsubscribe$)
    ).subscribe(data => this.title = data.data);

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }




}
