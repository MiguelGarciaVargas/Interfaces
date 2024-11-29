import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  constructor(private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    this.router.navigate(['/cursos']); // Navega a la ruta '/cursos'
  }
}
