import { Component } from '@angular/core';
import { CardMateriaComponent } from '../card-materia/card-materia.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-row',
  standalone: true,
  imports: [CardMateriaComponent, NgFor],
  templateUrl: './card-row.component.html',
  styleUrl: './card-row.component.css',
})
export class CardRowComponent {
  cards = [
    { title: 'Interfaces', color: 'clarito' },
    { title: 'Estructuras', color: 'fuertito' },
    { title: 'Base de datos', color: 'clarito' },
    { title: 'Técnicas', color: 'fuertito' },
    { title: 'Interfaces', color: 'clarito' },
    { title: 'Estructuras', color: 'fuertito' },
    { title: 'Base de datos', color: 'clarito' },
    { title: 'Técnicas', color: 'fuertito' },
  ];
}
