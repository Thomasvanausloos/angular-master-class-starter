import {Routes} from '@angular/router';
import {ContactsEditorComponent} from './contacts-editor/contacts-editor.component';
import {ContactDetailVieuwComponent} from './contact-detail-vieuw/contact-detail-vieuw.component';
import {ContacsDasboardComponent} from './contacs-dasboard/contacs-dasboard.component';
import {AboutComponent} from './about/about.component';
import {NavigationGuard} from './guards/navigation-guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: ContacsDasboardComponent,
    children: [
      {path: '', redirectTo: 'contacts/0', pathMatch: 'full'},
      {path: 'contacts/:id', component: ContactDetailVieuwComponent},
      {path: 'contacts/:id/edit', component: ContactsEditorComponent, canDeactivate: [NavigationGuard]},
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: ''},
];
