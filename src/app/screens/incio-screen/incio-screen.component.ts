import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incio-screen',
  templateUrl: './incio-screen.component.html',
  styleUrls: ['./incio-screen.component.less']
})
export class IncioScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
