import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-registrarse-screen',
  templateUrl: './registrarse-screen.component.html',
  styleUrls: ['./registrarse-screen.component.less']
})

export class RegistrarseScreenComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
