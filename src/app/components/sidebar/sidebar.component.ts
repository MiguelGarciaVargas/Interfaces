import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  profileImgUrl = 'assets/images/user-icon.png'; // Ruta correcta desde src

  isCollapsed = false; // Indica si la sidebar está colapsada

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
