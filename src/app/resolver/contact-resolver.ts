import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';
import {ContactsService} from '../contacts.service';
import {Contact} from '../models/contact';

@Injectable()
export class ContactResolver implements Resolve<Contact> {

  constructor(private contactService: ContactsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
    return this.contactService.getContactById(route.paramMap.get('id'));
  }


}
