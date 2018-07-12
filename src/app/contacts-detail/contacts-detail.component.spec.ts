import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ContactsDetailComponent} from './contacts-detail.component';
import {ContactsMaterialModule} from '../contacts-material.module';
import {By} from '@angular/platform-browser';

describe('contact details', () => {
  let fixture: ComponentFixture<ContactsDetailComponent>;
  let component: ContactsDetailComponent;
    const inputContact = {
      id: 0,
      name: 'Christoph Burgdorf',
      email: 'christoph@thoughtram.io',
      phone: '+49 000 1111',
      birthday: '1984-01-02',
      website: 'thoughtram.io',
      image: '/assets/images/0.jpg',
      address: {
        street: 'thoughtram road 1',
        zip: '65222',
        city: 'Hanover',
        country: 'Germany'
      }
    };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsDetailComponent],
      imports: [ContactsMaterialModule]
    });
    fixture = TestBed.createComponent(ContactsDetailComponent);
    component = fixture.componentInstance;
  });

  it('@Input works for property contact', () => {
    component.contact = inputContact;
    fixture.detectChanges();
    const matCardTitleElement = fixture.debugElement.query(By.css('mat-card-title'));
    expect(matCardTitleElement.nativeElement.textContent).toContain(inputContact.name);
  });
});
