import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/models/citas-card.models';
import { CitasService } from 'src/app/services/citas/citas.service';

@Component({
  selector: 'app-modificar-cita-card',
  templateUrl: './modificar-cita-card.component.html',
  styleUrls: ['./modificar-cita-card.component.less']
})
export class ModificarCitaCardComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  
  @Input()
  public citaId: number;


  constructor(private router: Router , private citasService: CitasService) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup(
      {
        paciente: new FormControl('',[Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        fechaConsulta: new FormControl('', [Validators.required]),
      }
    );
  }

  onSubmit(){
    this.mensaje="Cita modificada correctamente";
    this.isDivVisible = true;
    this.citasService.modificarCita(this.citaId,
      {
        nombrePaciente: this.paciente,
        descripcion: this.descripcion,
        fechaSolicitud: this.fechaConsulta,
      }
    );
    this.checkoutForm.reset();
  }

  get paciente() { return this.checkoutForm.get('paciente').value; }
  get descripcion() { return this.checkoutForm.get('descripcion').value }
  get fechaConsulta() { return this.checkoutForm.get('fechaConsulta').value }


}
