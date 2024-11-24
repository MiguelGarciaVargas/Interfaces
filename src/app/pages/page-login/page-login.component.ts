import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css',
})

export class PageLoginComponent {}

