import { Component, Input } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-tarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-tarea.component.html',
  styleUrl: './tabla-tarea.component.css',
})
export class TablaTareaComponent {
  @Input()
  tareas: Tarea[] = [];

  actualizarCalificacion(id: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const nuevaCalificacion = parseInt(inputElement.value, 10);
    const tarea = this.tareas.find((t) => t.id === id);
    if (tarea) {
      tarea.calificacion = nuevaCalificacion;
    }
  }
}
