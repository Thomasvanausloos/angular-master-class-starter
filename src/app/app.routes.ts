import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {Routes} from '@angular/router';
import {ContactsEditorComponent} from './contacts-editor/contacts-editor.component';
import {ContactDetailVieuwComponent} from './contact-detail-vieuw/contact-detail-vieuw.component';

export const APP_ROUTES: Routes  = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactDetailVieuwComponent },
  { path: 'contacts/:id/edit', component: ContactsEditorComponent },
  { path: '**', redirectTo: ''},
];
