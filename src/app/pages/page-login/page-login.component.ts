import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [LoginFormComponent, HeaderComponent, HeaderComponent],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css',
})
export class PageLoginComponent {}
