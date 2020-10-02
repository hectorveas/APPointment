import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InicioScreenComponent } from './screens/incio-screen/incio-screen.component';
import { InicioSesionScreenComponent } from './screens/inicio-sesion-screen/inicio-sesion-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
import { SesionPersonalDoctorComponent } from './screens/sesion-personal-doctor/sesion-personal-doctor.component';
import { SesionPersonalCitasDoctorComponent } from './screens/sesion-personal-citas-doctor/sesion-personal-citas-doctor.component';
import { SesionPersonalAyudaDoctorComponent } from './screens/sesion-personal-ayuda-doctor/sesion-personal-ayuda-doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { ConsultasCardComponent } from './components/consultas-card/consultas-card.component';
import { NavBarIzqComponent } from './components/nav-bar-izq/nav-bar-izq.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioSesionUsuarioScreenComponent } from './screens/inicio-sesion-usuario-screen/inicio-sesion-usuario-screen.component';
import { ContactanosScreenComponent } from './screens/contactanos-screen/contactanos-screen.component';
import { ModificarCitaCardComponent } from './components/modificar-cita-card/modificar-cita-card.component';
import { EliminarCitaCardComponent } from './components/eliminar-cita-card/eliminar-cita-card.component';
import { AgregarCitaCardComponent } from './components/agregar-cita-card/agregar-cita-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioScreenComponent,
    InicioSesionScreenComponent,
    RegistrarseScreenComponent,
    SesionPersonalDoctorComponent,
    SesionPersonalCitasDoctorComponent,
    SesionPersonalAyudaDoctorComponent,
    ConsultasCardComponent,
    NavBarIzqComponent,
    FooterComponent,
    InicioSesionUsuarioScreenComponent,
    ContactanosScreenComponent,
    ModificarCitaCardComponent,
    EliminarCitaCardComponent,
    AgregarCitaCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
