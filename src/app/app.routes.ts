import {Routes} from '@angular/router';
import {ContactsEditorComponent} from './contacts-editor/contacts-editor.component';
import {ContactDetailVieuwComponent} from './contact-detail-vieuw/contact-detail-vieuw.component';
import {ContacsDasboardComponent} from './contacs-dasboard/contacs-dasboard.component';
import {NavigationGuard} from './guards/navigation-guard';
import {ContactResolver} from './resolver/contact-resolver';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: ContacsDasboardComponent,
    children: [
      {path: '', redirectTo: 'contacts/0', pathMatch: 'full'},
      {path: 'contacts/:id', component: ContactDetailVieuwComponent, resolve: {contact: ContactResolver}},
      {
        path: 'contacts/:id/edit',
        component: ContactsEditorComponent,
        resolve: {contact: ContactResolver},
        canDeactivate: [NavigationGuard]
      },
    ]
  },
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', redirectTo: ''},
];
