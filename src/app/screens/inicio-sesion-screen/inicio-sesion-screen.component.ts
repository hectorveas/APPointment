import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion-screen',
  templateUrl: './inicio-sesion-screen.component.html',
  styleUrls: ['./inicio-sesion-screen.component.less']
})
export class InicioSesionScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarScreen(){
    this.router.navigate(['/inicio-screen']);
  }
  // temporal
  navegarSesionDoctor() {
    this.router.navigate(['/sesion-personal-citas-doctor']);
  }

}

