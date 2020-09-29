import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> testing

@Component({
  selector: 'app-nav-bar-izq',
  templateUrl: './nav-bar-izq.component.html',
  styleUrls: ['./nav-bar-izq.component.less']
})
export class NavBarIzqComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private router:Router) { }
>>>>>>> testing

  ngOnInit(): void {
  }

<<<<<<< HEAD
}
=======
  sesion(){
    this.router.navigate(['/sesion-personal-doctor']);
  }

  citas(){
    this.router.navigate(['/sesion-personal-citas-doctor']);
  }

  ayuda(){
    this.router.navigate(['/sesion-personal-ayuda-doctor']);
  }

}
>>>>>>> testing
