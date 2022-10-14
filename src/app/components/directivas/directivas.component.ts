import { Component, OnInit } from '@angular/core';
import {Alumno} from 'src/app/models/alumno'

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  listaAlumnos: Array<Alumno> = [
    {nombre: 'Jose', apePaterno: 'Yeverino', apeMaterno: 'Nava', edad: 22, promedio: 95},
    {nombre: 'Jesus', apePaterno: 'Cruz', apeMaterno: 'Martinez', edad: 23, promedio: 90},
    {nombre: 'Benito', apePaterno: 'Obregón', apeMaterno: 'Martínez', edad: 23, promedio: 67},
    {nombre: 'Alexis', apePaterno: 'Rodríguez', apeMaterno: 'Rodríguez', edad: 25, promedio: 90},
    {nombre: 'María', apePaterno: 'Almaguer', apeMaterno: 'Juárez', edad: 22, promedio: 80},
    {nombre: 'Eduardo', apePaterno: 'Gaytan', apeMaterno: 'Garza', edad: 21, promedio: 55},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
