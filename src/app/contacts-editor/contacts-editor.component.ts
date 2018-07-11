import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../models/contact';
import {EventBusService} from '../eventbus/event-bus.service';
import {MessageTypes} from '../message-types.enum';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html'
})
export class ContactsEditorComponent implements OnInit {

  contact: Contact = <Contact>{address: {}};
  pressedSave: boolean;

  constructor(private contactsService: ContactsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private eventBusService: EventBusService) {
  }

  ngOnInit() {
    this.pressedSave = false;
    this.contactsService.getContactById(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(contact => {
        this.contact = contact;
        this.eventBusService.emit(MessageTypes.APP_TITLE_CHANGE, `Edit: ${this.contact.name}`);
      });

  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact).subscribe((() => this.goToDetails(contact)));
    this.pressedSave = true;
  }

  private goToDetails(contact: Contact) {
    // this.router.navigate(['/contacts', contact.id]);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
