import { NgClass } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-materia',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './card-materia.component.html',
  styleUrl: './card-materia.component.css',
})
export class CardMateriaComponent implements OnInit {
  @Input()
  title: string = 'Materia';
  @Input()
  color: string = 'azulClarito';

  colorClass = '';

  ngOnInit(): void {
    this.colorClass = this.color;
  }
}
