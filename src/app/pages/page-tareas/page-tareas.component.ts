import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { TablaTareaComponent } from '../../components/tabla-tarea/tabla-tarea.component';
import { CardRowComponent } from '../../components/card-row/card-row.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-page-tareas',
  standalone: true,
  imports: [
    SearchBarComponent,
    TablaTareaComponent,
    CardRowComponent,
    SidebarComponent,
  ],
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
      entregas: 3,
      calificacion: null,
      estado: 'pendiente',
    },
    {
      id: 2,
      fechaAsignacion: '01/02/2024 12:30',
      fechaEntrega: '05/02/2024 17:00',
      asignacion: 'Inteligencia Artificial',
      entregas: 0,
      calificacion: null,
      estado: 'pendiente',
    },
    {
      id: 2,
      fechaAsignacion: '01/02/2024 12:30',
      fechaEntrega: '05/02/2024 17:00',
      asignacion: 'Interfaces Interactivas',
      entregas: 2,
      calificacion: 10,
      estado: 'pendiente',
    },
  ];
}
