import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-izq',
  templateUrl: './nav-bar-izq.component.html',
  styleUrls: ['./nav-bar-izq.component.less']
})
export class NavBarIzqComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

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
