import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactsMaterialModule} from './contacts-material.module';

import {ContactsAppComponent} from './app.component';
import {ContactsService} from './contacts.service';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {ContactsDetailComponent} from './contacts-detail/contacts-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactsEditorComponent} from './contacts-editor/contacts-editor.component';
import {FormsModule} from '@angular/forms';
import { ContactDetailVieuwComponent } from './contact-detail-vieuw/contact-detail-vieuw.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import {EventBusService} from './eventbus/event-bus.service';
import { AboutComponent } from './about/about.component';
import { ContacsDasboardComponent } from './contacs-dasboard/contacs-dasboard.component';
import {NavigationGuard} from './guards/navigation-guard';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactDetailVieuwComponent,
    TabComponent,
    TabsComponent,
    AboutComponent,
    ContacsDasboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    ContactsService,
    EventBusService,
    NavigationGuard
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
