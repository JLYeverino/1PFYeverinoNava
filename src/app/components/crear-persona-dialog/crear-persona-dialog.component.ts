import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface Persona{
  id:number
  nombre: string
  apellido: string
  email: string
  telefono: number
  edad: number
}

@Component({
  selector: 'app-crear-persona-dialog',
  templateUrl: './crear-persona-dialog.component.html',
  styleUrls: ['./crear-persona-dialog.component.css']
})
export class CrearPersonaDialogComponent implements OnInit {
  action?:string;
  local_data:any;
  formPersona: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<CrearPersonaDialogComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Persona
  ) {
    //console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.formPersona = fb.group({
      nombre: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      apellido: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[0-9]\d*$/)]),
      edad: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.maxLength(2),Validators.minLength(2)]),
      email: new FormControl('', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      // contrasena: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^.*[A-Z]+.*$')]),
    });
  }
  ngOnInit(): void {
  }
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
  // guardar() {
  //   this.dialogRef.close(this.formPersona.value)
  // }
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
