import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {Contact} from '../models/contact';
import {EventBusService} from '../eventbus/event-bus.service';
import {MessageTypes} from '../message-types.enum';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'trm-contact-detail-vieuw',
  templateUrl: './contact-detail-vieuw.component.html'
})
export class ContactDetailVieuwComponent implements OnInit {

  contact$: Observable<Contact>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private eventBusService: EventBusService) {
  }

  ngOnInit() {
    this.contact$ = this.activatedRoute.data.pipe(
      map(data => data['contact']),
      tap(contact => this.eventBusService.emit(MessageTypes.APP_TITLE_CHANGE, contact.name))
    );

    // this.activatedRoute.paramMap.pipe(
    //   switchMap(paraMap => this.contact$ = this.activatedRoute.data),
    // ).subscribe();

    // this.activatedRoute.params.subscribe(params => {
    //   this.contact$ = this.contactService.getContactById(params['id']).pipe(
    //     tap(contact => this.eventBusService.emit(MessageTypes.APP_TITLE_CHANGE, contact.name))
    //   );
    // });
  }

  navigateToList() {
    this.router.navigate(['/']);
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }
}
