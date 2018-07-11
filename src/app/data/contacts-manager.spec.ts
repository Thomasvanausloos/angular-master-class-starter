import {ContactManager} from './contact-manager';
import {CONTACT_DATA} from './contact-data';

describe('contact manager', () => {
  let contactManager: ContactManager;
  beforeEach(() => {
    contactManager = new ContactManager(CONTACT_DATA);
  });
  it('get all should return all', () => {
    expect(contactManager.getAll()).toEqual(CONTACT_DATA);
  });


  it('byId should return the correct contact', () => {
    const contactId = 1;
    expect(contactManager.get(contactId).id).toEqual(contactId);
  });

  it('byId should return null if id does not exist', () => {
    expect(CONTACT_DATA.filter(contact => contact.id === 999).length).toEqual(0);
    expect(contactManager.get(999)).toEqual(null);
  });

  it('when adding a contact, the contact should be inside the contactManager', () => {
    const contact = {
      id: 555,
      name: 'TestContact',
      email: 'testie@thoughtram.io',
      phone: '+49 000 1111',
      birthday: '1984-01-02',
      website: 'test.io',
      image: '/assets/images/0.jpg',
      address: {
        street: 'test road 1',
        zip: '65222',
        city: 'Hanover',
        country: 'Germany'
      }
    };
    contactManager.add(contact);
    expect(contactManager.getAll()).toContain(contact);
  });

  it('when updating a contact that does not exist, throws error', () => {
    const nonExistingContact = {
      id: 555,
      name: 'TestContact',
      email: 'testie@thoughtram.io',
      phone: '+49 000 1111',
      birthday: '1984-01-02',
      website: 'test.io',
      image: '/assets/images/0.jpg',
      address: {
        street: 'test road 1',
        zip: '65222',
        city: 'Hanover',
        country: 'Germany'
      }
    };
    expect(contactManager.getAll().indexOf(nonExistingContact)).toBe(-1);
    // try {
    expect((() => contactManager.update(nonExistingContact))).toThrowError(`Trying to update contact that doesn't exist with ID: ${nonExistingContact.id}!`);
    // } catch (e) {
    //   console.log(e.message);
    // }
  });

});
