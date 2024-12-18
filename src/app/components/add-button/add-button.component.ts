import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {
  @Output() addClick = new EventEmitter<void>();

  onClick() {
    this.addClick.emit();
  }
}
