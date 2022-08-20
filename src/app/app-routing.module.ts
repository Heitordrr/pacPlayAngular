import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './sharepage/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CadastroComponent } from './sharepage/cadastro/cadastro.component';
import { FormularioComponent } from './clientes/formulario/formulario.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: '', component:MenuComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cadastro', component:CadastroComponent},
  {path: 'formulario', component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
