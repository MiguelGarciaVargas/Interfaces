import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card-materia',
  standalone: true,
  imports: [],
  templateUrl: './card-materia.component.html',
  styleUrl: './card-materia.component.css',
})
export class CardMateriaComponent {
  @Input()
  title: string = 'Materia';
}
