import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-asistencia',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabla-asistencia.component.html',
  styleUrl: './tabla-asistencia.component.css',
})
export class TablaAsistenciaComponent {
  alumnos = [
    'Alumno 1',
    'Alumno 2',
    'Alumno 3',
    'Alumno 4',
    'Alumno 5',
    'Alumno 6',
    'Alumno 7',
    'Alumno 8',
  ];
}
