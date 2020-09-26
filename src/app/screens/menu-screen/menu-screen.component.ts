import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.less']
})
export class MenuScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
