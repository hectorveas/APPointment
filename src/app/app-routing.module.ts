import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncioScreenComponent } from './screens/incio-screen/incio-screen.component';
import { InicioSesionScreenComponent } from './screens/inicio-sesion-screen/inicio-sesion-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
<<<<<<< HEAD
=======
import { SesionPersonalAyudaDoctorComponent } from './screens/sesion-personal-ayuda-doctor/sesion-personal-ayuda-doctor.component';
>>>>>>> testing
import { SesionPersonalCitasDoctorComponent } from './screens/sesion-personal-citas-doctor/sesion-personal-citas-doctor.component';
import { SesionPersonalDoctorComponent } from './screens/sesion-personal-doctor/sesion-personal-doctor.component';


const routes: Routes = [
  {path: '', redirectTo:'/inicio-screen', pathMatch: 'full'},
  {path: 'inicio-sesion-screen', component: InicioSesionScreenComponent },
  {path: 'inicio-screen', component: IncioScreenComponent},
<<<<<<< HEAD
  {path: 'registrarse-screen', component: RegistrarseScreenComponent },
  {path: 'sesion-personal-citas-doctor', component: SesionPersonalCitasDoctorComponent },
  {path: 'sesion-personal-doctor', component: SesionPersonalDoctorComponent},
=======
  {path: 'registrarse-screen',component: RegistrarseScreenComponent},
  {path: 'sesion-personal-ayuda-doctor', component:SesionPersonalAyudaDoctorComponent},
  {path: 'sesion-personal-citas-doctor', component:SesionPersonalCitasDoctorComponent},
  {path: 'sesion-personal-doctor', component:SesionPersonalDoctorComponent},
>>>>>>> testing
  {path: '**', redirectTo:'/inicio-screen'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
