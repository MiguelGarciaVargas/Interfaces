import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CardRowComponent } from '../../components/card-row/card-row.component';
import { TablaAsistenciaComponent } from '../../components/tabla-asistencia/tabla-asistencia.component';
import { TablaNotasComponent } from '../../components/tabla-notas/tabla-notas.component';

@Component({
  selector: 'app-page-notas',
  standalone: true,
  imports: [
    SidebarComponent,
    SearchBarComponent,
    CardRowComponent,
    TablaAsistenciaComponent,
    TablaNotasComponent,
  ],
  templateUrl: './page-notas.component.html',
  styleUrl: './page-notas.component.css',
})
export class PageNotasComponent {}
