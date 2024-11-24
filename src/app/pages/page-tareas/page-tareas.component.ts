import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';

@Component({
  selector: 'app-page-tareas',
  standalone: true,
  imports: [],
  templateUrl: './page-tareas.component.html',
  styleUrl: './page-tareas.component.css',
})
export class PageTareasComponent {
  tareas: Tarea[] = [
    {
      id: 1,
      fechaAsignacion: '01/02/2024 12:30',
      fechaEntrega: '05/02/2024 17:00',
      asignacion: 'Adm. de Proyectos 1',
      entregas: 1,
      calificacion: null,
      estado: 'pendiente',
    },
    {
      id: 2,
      fechaAsignacion: '01/02/2024 12:30',
      fechaEntrega: '05/02/2024 17:00',
      asignacion: 'Inteligencia Artificial',
      entregas: 2,
      calificacion: null,
      estado: 'pendiente',
    },
  ];
}
