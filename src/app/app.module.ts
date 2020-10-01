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
import { CrudDoctorComponent } from './components/crud-doctor/crud-doctor.component';
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { AgregarCitaComponent } from './components/crud-doctor/agregar-cita/agregar-cita.component';
import { ModificarCitaComponent } from './components/crud-doctor/modificar-cita/modificar-cita.component';
import { EliminarCitaComponent } from './components/crud-doctor/eliminar-cita/eliminar-cita.component';


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
    FooterComponent,
    InicioSesionUsuarioScreenComponent,
    CrudDoctorComponent,
    CrudUsuarioComponent,
    AgregarCitaComponent,
    ModificarCitaComponent,
    EliminarCitaComponent,
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
