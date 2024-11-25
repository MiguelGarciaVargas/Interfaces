import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../interfaces/tarea';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css'
})
export class AddModalComponent {
  @Input() editingTarea: Tarea | null = null;
  @Output() onAddTarea = new EventEmitter<Tarea>();
  @Output() onClose = new EventEmitter<void>();

  tarea: Tarea = {
    id: 0,
    fechaAsignacion: '',
    fechaEntrega: '',
    asignacion: '',
    entregas: 0,
    calificacion: null,
    estado: 'pendiente',
  };

  ngOnChanges() {
    if (this.editingTarea) {
      this.tarea = { ...this.editingTarea };
    }
  }

  closeModal() {
    this.onClose.emit();
  }

  submitForm() {
    this.onAddTarea.emit(this.tarea);
    this.closeModal();
  }
}
