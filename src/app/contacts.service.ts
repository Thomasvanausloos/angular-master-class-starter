import {Injectable} from '@angular/core';
import {Contact} from './models/contact';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';


interface ContactResponse {
  item: Contact;
}

interface ContactsResponse {
  items: Contact[];
}

@Injectable()
export class ContactsService {

  private API_ENDPOINT = 'http://localhost:4201/api';

  constructor(private http: HttpClient) {
  }

  public getContacts(): Observable<Array<Contact>> {
    return this.http.get<ContactsResponse>(`${this.API_ENDPOINT}/contacts`).pipe(
      map(data => data.items)
    );
  }

  public getContactById(id: string): Observable<Contact> {
    return this.http.get<ContactResponse>(`${this.API_ENDPOINT}/contacts/${id}`).pipe(
      map(data => data.item)
    );
  }

  public updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<ContactResponse>(`${this.API_ENDPOINT}/contacts/${contact.id}`, contact).pipe(
      map(data => data.item)
    );
  }

  public searchContact(term: string): Observable<Array<Contact>> {
    return this.http.get<ContactsResponse>(`${this.API_ENDPOINT}/search?text=${term}`).pipe(
    map(data => data.items)
    );
  }
}
