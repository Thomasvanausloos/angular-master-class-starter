import {Component, OnInit} from '@angular/core';
import {Contact} from './models/contact';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {

  constructor(private contactService: ContactsService) {
  }

  contacts: Array<Contact>;

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  public trackByContactId(id: number, contact: Contact) {
    return contact.id;
  }
}
