import { Component } from '@angular/core';
import { CardMateriaComponent } from '../../components/card-materia/card-materia.component';
import { CardRowComponent } from '../../components/card-row/card-row.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { TablaAsistenciaComponent } from '../../components/tabla-asistencia/tabla-asistencia.component';

@Component({
  selector: 'app-page-asistencias',
  standalone: true,
  imports: [
    CardMateriaComponent,
    CardRowComponent,
    SidebarComponent,
    SearchBarComponent,
    TablaAsistenciaComponent,
  ],
  templateUrl: './page-asistencias.component.html',
  styleUrl: './page-asistencias.component.css',
})
export class PageAsistenciasComponent {}
