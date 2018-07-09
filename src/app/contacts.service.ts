import {Injectable} from '@angular/core';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './data/contact-data';

@Injectable()
export class ContactsService {

  constructor() {
  }

  public getContacts(): Array<Contact> {
    return CONTACT_DATA;
  }

  public getContactById(id: string) {
    return CONTACT_DATA.find(contact => contact.id.toString() === id);
  }
}
