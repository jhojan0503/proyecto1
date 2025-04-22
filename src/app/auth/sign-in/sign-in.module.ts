import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    SignInComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
