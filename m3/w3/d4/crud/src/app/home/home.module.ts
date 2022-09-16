import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgzModule } from '../ngz/ngz/ngz.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgzModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
