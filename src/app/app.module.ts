import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IncioScreenComponent } from './screens/incio-screen/incio-screen.component';
import { InicioSesionScreenComponent } from './screens/inicio-sesion-screen/inicio-sesion-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
import { SesionPersonalDoctorComponent } from './screens/sesion-personal-doctor/sesion-personal-doctor.component';
import { SesionPersonalCitasDoctorComponent } from './screens/sesion-personal-citas-doctor/sesion-personal-citas-doctor.component';
import { SesionPersonalAyudaDoctorComponent } from './screens/sesion-personal-ayuda-doctor/sesion-personal-ayuda-doctor.component';
import { ConsultasCardComponent } from './components/consultas-card/consultas-card.component';
import { NavBarIzqComponent } from './components/nav-bar-izq/nav-bar-izq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IncioScreenComponent,
    InicioSesionScreenComponent,
    RegistrarseScreenComponent,
    SesionPersonalDoctorComponent,
    SesionPersonalCitasDoctorComponent,
    SesionPersonalAyudaDoctorComponent,
    ConsultasCardComponent,
    NavBarIzqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
