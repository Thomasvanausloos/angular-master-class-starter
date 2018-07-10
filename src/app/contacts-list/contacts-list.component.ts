import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactsService} from '../contacts.service';
import {Contact} from '../models/contact';
import {Observable} from 'rxjs/internal/Observable';
import {debounceTime, distinctUntilChanged, flatMap, merge, startWith, switchMap, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/internal/Subject';
import {EventBusService} from '../eventbus/event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent implements OnInit, OnDestroy {

  constructor(private contactsService: ContactsService,
              private eventBusService: EventBusService) {
  }

  contacts$: Observable<Array<Contact>>;
  term$: Subject<string> = new Subject();
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
    this.contacts$ = this.term$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.contactsService.searchContact(term)),
      merge(this.contactsService.getContacts().pipe(
        takeUntil(this.term$)
      )),
      takeUntil(this.unsubscribe$)
    );
    this.eventBusService.emit('appTitleChange', 'Contact list');

    // this.contacts$ = this.term$.pipe(
    //   debounceTime(400),
    //   startWith(''),   => injects a start=value
    //   distinctUntilChanged(),
    //   switchMap(term => this.contactsService.searchContact(term)),
    //   takeUntil(this.unsubscribe$)
    // );
  }

  public trackByContactId(id: number, contact: Contact) {
    return contact.id;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }
}
