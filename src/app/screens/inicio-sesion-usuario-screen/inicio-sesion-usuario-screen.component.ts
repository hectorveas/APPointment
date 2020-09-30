import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion-usuario-screen',
  templateUrl: './inicio-sesion-usuario-screen.component.html',
  styleUrls: ['./inicio-sesion-usuario-screen.component.less']
})
export class InicioSesionUsuarioScreenComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor(private router: Router) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required])
    });
  }

  SesionIniciada(){
    this.router.navigate(['/sesion-personal-doctor-cambiar']);
  }

  navegarPersonal(){
    this.router.navigate(['/inicio-sesion-screen'])
  }

  navegarUsuario(){
    this.router.navigate(['/inicio-sesion-usuario-screen'])
  }

  onSubmit(){
    this.mensaje="datos completados";
    this.isDivVisible=true;
  }

  get usuario() { return this.checkoutForm.get('usuario'); }
  get password() { return this.checkoutForm.get('password'); }


}
