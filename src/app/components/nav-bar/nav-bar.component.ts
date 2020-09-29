import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) {

  }  
  
  
  ngOnInit(): void {

  }

  navegarinicioSesion(){
    this.router.navigate(['/inicio-sesion-screen']);
  }

  navegarRegistrarse(){
    this.router.navigate(['/registrarse-screen']);
  }

  navegarCerrarSesion(){
    this.router.navigate(['/menu-screen']);
  }

<<<<<<< HEAD
  /*navegarSesionDoctor() {
    this.router.navigate(['/sesion-personal-citas-doctor']);
  }*/

=======
>>>>>>> testing
  navegarContacto(){
    this.router.navigate(['/#contact']);
  }

  public getUrl(): string{
    return this.router.url;
  }

}