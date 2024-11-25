import { Component } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { TablaTareaComponent } from '../../components/tabla-tarea/tabla-tarea.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FiltrarSelectComponent } from '../../components/filtrar-select/filtrar-select.component';
import { NgIf } from '@angular/common';
import { AddModalComponent } from '../../components/add-modal/add-modal.component';
import { AddButtonComponent } from '../../components/add-button/add-button.component';

@Component({
  selector: 'app-page-tareas',
  standalone: true,
  imports: [
    SearchBarComponent,
    TablaTareaComponent,
    SidebarComponent,
    FiltrarSelectComponent,
    NgIf,
    AddModalComponent,
    AddButtonComponent
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
      id: 3,
      fechaAsignacion: '01/02/2024 12:30',
      fechaEntrega: '05/02/2024 17:00',
      asignacion: 'Interfaces Interactivas',
      entregas: 2,
      calificacion: 10,
      estado: 'pendiente',
    },
  ];
  modalVisible = false;
  editingTarea: Tarea | null = null;

  showModal(tarea?: Tarea) {
    this.editingTarea = tarea || null;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.editingTarea = null;
  }

  addTarea(tarea: Tarea) {
    if (this.editingTarea) {
      const index = this.tareas.findIndex((t) => t.id === this.editingTarea?.id);
      if (index !== -1) {
        this.tareas[index] = tarea;
      }
    } else {
      this.tareas = [...this.tareas, {...tarea, id: Date.now() }];
    }
    this.closeModal();
  }
}
