import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IncioScreenComponent } from './screens/incio-screen/incio-screen.component';
import { InicioSesionScreenComponent } from './screens/inicio-sesion-screen/inicio-sesion-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
import { MenuScreenComponent } from './screens/menu-screen/menu-screen.component';
import { AyudaScreenComponent } from './screens/ayuda-screen/ayuda-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IncioScreenComponent,
    InicioSesionScreenComponent,
    RegistrarseScreenComponent,
    MenuScreenComponent,
    AyudaScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
