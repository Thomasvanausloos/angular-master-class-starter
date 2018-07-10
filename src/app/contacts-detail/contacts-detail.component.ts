import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html'
})
export class ContactsDetailComponent {

  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<boolean>();


  goToEditContact() {
    this.edit.emit(this.contact);
  }

  goBackToList() {
    this.back.emit(true);
  }
}
