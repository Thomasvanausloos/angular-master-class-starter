import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../contacts.service';
import {Contact} from '../models/contact';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {

  constructor(private contactsService: ContactsService) {
  }

  contacts: Array<Contact>;

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  public trackByContactId(id: number, contact: Contact) {
    return contact.id;
  }
}
