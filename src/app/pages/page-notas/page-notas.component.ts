import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-page-notas',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './page-notas.component.html',
  styleUrl: './page-notas.component.css',
})
export class PageNotasComponent {}
