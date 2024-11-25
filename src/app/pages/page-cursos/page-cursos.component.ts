import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardRowComponent } from '../../components/card-row/card-row.component';
import { HorarioComponent } from '../../components/horario/horario.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-page-cursos',
  standalone: true,
  imports: [
    SidebarComponent,
    CardRowComponent,
    HorarioComponent,
    HeaderComponent,
  ],
  templateUrl: './page-cursos.component.html',
  styleUrl: './page-cursos.component.css',
})
export class PageCursosComponent {}
