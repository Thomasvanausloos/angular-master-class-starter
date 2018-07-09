import {Injectable} from '@angular/core';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './data/contact-data';

@Injectable(
  // {
  // providedIn: 'root'
// }
)
export class ContactsService {

  constructor() {
  }

  public getContacts(): Array<Contact> {
    return CONTACT_DATA;
  }
}
