import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CrearPersonaDialogComponent } from '../crear-persona-dialog/crear-persona-dialog.component';
import {ListaPersonas} from './personas'
@Component({
  selector: 'app-abm-tabla',
  templateUrl: './abm-tabla.component.html',
  styleUrls: ['./abm-tabla.component.css']
})
export class AbmTablaComponent implements OnInit {
  dataInicial = ListaPersonas
  ELEMENT_DATA = new MatTableDataSource()
  displayedColumns: string[] = ['nombre','apellido','edad','telefono','email','edit','delete'];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ELEMENT_DATA.data = this.dataInicial
  }

  openDialog(action:string,obj:any) {
    obj.action = action;
    // const elemento = this.dataInicial.find(persona => persona.id == id);
    //console.log(obj);
    const dialog = this.dialog.open(CrearPersonaDialogComponent, {
      width: '50%',
      height: '50%',
      data:obj,
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result.event);
      if(result.event == 'Guardar'){
        this.addRowData(result.data);
      }else if(result.event == 'Editar'){
        this.updateRowData(result.data);
      }
    });
  }

  addRowData(row_obj:any){
    console.log(row_obj);
    this.dataInicial.push({
      ...row_obj,
      id:this.dataInicial.length+1
    });
    this.ELEMENT_DATA.data = this.dataInicial
  }
  updateRowData(row_obj:any){
    this.dataInicial = this.dataInicial.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.nombre = row_obj.nombre;
        value.apellido = row_obj.apellido;
        value.email = row_obj.email;
        value.telefono = row_obj.telefono;
        value.edad = row_obj.edad;
      }
      return true;
    });
  }

  delete(id: number) {
    let position = this.dataInicial.findIndex(persona => persona.id == id)
    this.dataInicial.splice(position, 1)
    this.ELEMENT_DATA.data = this.dataInicial
  }
}