import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from './about.component';
import {RouterModule} from '@angular/router';
import {ABOUT_ROUTES} from './about.routes';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactsMaterialModule} from '../contacts-material.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ContactsMaterialModule,
    RouterModule.forChild(ABOUT_ROUTES)
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
