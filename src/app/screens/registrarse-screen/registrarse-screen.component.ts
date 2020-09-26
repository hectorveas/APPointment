import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse-screen',
  templateUrl: './registrarse-screen.component.html',
  styleUrls: ['./registrarse-screen.component.less']
})
export class RegistrarseScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
