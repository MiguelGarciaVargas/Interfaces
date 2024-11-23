import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-notas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabla-notas.component.html',
  styleUrl: './tabla-notas.component.css',
})
export class TablaNotasComponent {
  alumnos = [
    {
      nombre: 'Alumno 1',
      calificaciones: {
        A: 2,
        T: 4,
        C: 8,
      },
    },
    {
      nombre: 'Alumno 2',
      calificaciones: {
        A: 3,
        T: 5,
        C: 7,
      },
    },
    {
      nombre: 'Alumno 3',
      calificaciones: {
        A: 4,
        T: 6,
        C: 5,
      },
    },
    {
      nombre: 'Alumno 4',
      calificaciones: {
        A: 1,
        T: 3,
        C: 6,
      },
    },
    {
      nombre: 'Alumno 5',
      calificaciones: {
        A: 5,
        T: 7,
        C: 9,
      },
    },
    {
      nombre: 'Alumno 6',
      calificaciones: {
        A: 2,
        T: 8,
        C: 4,
      },
    },
    {
      nombre: 'Alumno 7',
      calificaciones: {
        A: 6,
        T: 4,
        C: 3,
      },
    },
    {
      nombre: 'Alumno 8',
      calificaciones: {
        A: 3,
        T: 5,
        C: 8,
      },
    },
  ];
}
