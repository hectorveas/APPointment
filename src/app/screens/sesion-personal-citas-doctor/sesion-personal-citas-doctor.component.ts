import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/citas-card.models';
import { CitasService } from 'src/app/services/citas/citas.service';


@Component({
  selector: 'app-sesion-personal-citas-doctor',
  templateUrl: './sesion-personal-citas-doctor.component.html',
  styleUrls: ['./sesion-personal-citas-doctor.component.less']
})
export class SesionPersonalCitasDoctorComponent implements OnInit {

  public citas: Cita[];
  public citaSeleccionada: Cita;
  public id: string | number;
  public screenHeight: number;
  public opciones: number;

  constructor(private citasCard: CitasService) {
    this.citaSeleccionada = null;
  }
  
  ngOnInit(): void {

    let { height } = window.screen;
    
    this.screenHeight = 800;
    this.citas = this.citasCard.getAllCitas();
    //this.cita = this.citasCard.getCitaByID(this.id);
  }

  setOption(numero: number) { 
    this.opciones = numero;
  }

  seleccionarCita(cita: Cita) {
    this.citaSeleccionada = cita;
  }

}