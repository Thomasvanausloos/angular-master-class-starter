import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {Contact} from '../models/contact';

@Component({
  selector: 'trm-contact-detail-vieuw',
  templateUrl: './contact-detail-vieuw.component.html'
})
export class ContactDetailVieuwComponent implements OnInit {

  private contact$: Observable<Contact>;

  constructor(private contactService: ContactsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.contact$ = this.contactService.getContactById(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  navigateToList() {
      this.router.navigate(['/']);
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }
}
