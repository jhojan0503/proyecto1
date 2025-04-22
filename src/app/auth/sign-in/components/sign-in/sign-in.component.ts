import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInService } from '../../services/sign-in.service';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(public dialogo: MatDialog, private signinService:SignInService) { }
abrirModal() {
  this.signinService.guardarDialogRef(this.dialogo.open(FormularioComponent,{height:'500px',width:'400px'}))
}
}
