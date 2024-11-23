import { Component } from '@angular/core';
import { CardMateriaComponent } from '../card-materia/card-materia.component';

@Component({
  selector: 'app-card-row',
  standalone: true,
  imports: [CardMateriaComponent],
  templateUrl: './card-row.component.html',
  styleUrl: './card-row.component.css',
})
export class CardRowComponent {}
