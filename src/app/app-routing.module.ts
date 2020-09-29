import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncioScreenComponent } from './screens/incio-screen/incio-screen.component';
import { InicioSesionScreenComponent } from './screens/inicio-sesion-screen/inicio-sesion-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
import { SesionPersonalCitasDoctorComponent } from './screens/sesion-personal-citas-doctor/sesion-personal-citas-doctor.component';
import { SesionPersonalDoctorComponent } from './screens/sesion-personal-doctor/sesion-personal-doctor.component';


const routes: Routes = [
  {path: '', redirectTo:'/inicio-screen', pathMatch: 'full'},
  {path: 'inicio-sesion-screen', component: InicioSesionScreenComponent },
  {path: 'inicio-screen', component: IncioScreenComponent},
  {path: 'registrarse-screen', component: RegistrarseScreenComponent },
  {path: 'sesion-personal-citas-doctor', component: SesionPersonalCitasDoctorComponent },
  {path: 'sesion-personal-doctor', component: SesionPersonalDoctorComponent},
  {path: '**', redirectTo:'/inicio-screen'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
