import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incio-screen',
  templateUrl: './incio-screen.component.html',
  styleUrls: ['./incio-screen.component.less']
})
export class InicioScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarContactanos(){
    this.router.navigate(['/contactanos-screen']);
  }

}
