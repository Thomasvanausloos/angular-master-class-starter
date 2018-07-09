import {Component} from '@angular/core';
import {CONTACT_DATA} from './data/contact-data';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {
  
  contacts = CONTACT_DATA;
}