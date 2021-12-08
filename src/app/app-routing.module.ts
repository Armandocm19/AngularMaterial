import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EditarUsuariosComponent } from './components/dashboard/usuarios/editar-usuarios/editar-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component:  LoginComponent},
  //Lo siguiente se le llama "carga pesada", y esto es para que al cargar la ruta, no cargue todos los componente, sino que solo el que se necesita
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path:'editar-usuario/:id', component: EditarUsuariosComponent },
  { path:'**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
