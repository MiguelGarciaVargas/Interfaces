import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabla-tarea',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tabla-tarea.component.html',
  styleUrl: './tabla-tarea.component.css',
})
export class TablaTareaComponent implements OnChanges {
  @Input() listaTareas: Tarea[] = []; // Lista recibida desde el componente padre
  tareas: Tarea[] = []; // Copia local para manipular
  sortOrder: 'asc' | 'desc' = 'asc'; // Orden inicial

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listaTareas']) {
      // Sincroniza la copia local cuando cambie el Input
      this.tareas = [...this.listaTareas];
      this.sortTareas();
    }
  }

  toggleOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'; // Alterna el orden
    this.sortTareas();
  }

  sortTareas() {
    this.tareas.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a.id - b.id; // Orden ascendente
      } else {
        return b.id - a.id; // Orden descendente
      }
    });
  }

  actualizarCalificacion(id: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const nuevaCalificacion = parseInt(inputElement.value, 10);
    const tarea = this.tareas.find((t) => t.id === id);
    if (tarea) {
      tarea.calificacion = nuevaCalificacion;
    }
  }

  marcarCompletada(id: number) {
    const tarea = this.listaTareas.find((t) => t.id === id);
    if (tarea) {
      tarea.estado = 'completada';
    }
  }
}
