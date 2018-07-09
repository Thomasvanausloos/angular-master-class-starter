import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html'
})
export class ContactsDetailComponent implements OnInit {

  currentContact: Contact;

  constructor(private contactsService: ContactsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentContact = this.contactsService.getContactById(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}
