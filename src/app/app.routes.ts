import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageAsistenciasComponent } from './pages/page-asistencias/page-asistencias.component';
import { PageCursosComponent } from './pages/page-cursos/page-cursos.component';
import { PageNotasComponent } from './pages/page-notas/page-notas.component';
import { PageTareasComponent } from './pages/page-tareas/page-tareas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a login si no hay ruta especificada
  { path: 'login', component: PageLoginComponent },
  { path: 'asistencias', component: PageAsistenciasComponent },
  { path: 'cursos', component: PageCursosComponent },
  { path: 'notas', component: PageNotasComponent },
  { path: 'tareas', component: PageTareasComponent },
];
