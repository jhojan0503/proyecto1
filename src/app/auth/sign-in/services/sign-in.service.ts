import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormularioComponent } from '../components/formulario/formulario.component';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  dialogRef: MatDialogRef<FormularioComponent> | undefined;

  constructor() { }
  guardarDialogRef(dialogRef: MatDialogRef<FormularioComponent>) {
    this.dialogRef = dialogRef;
}
}