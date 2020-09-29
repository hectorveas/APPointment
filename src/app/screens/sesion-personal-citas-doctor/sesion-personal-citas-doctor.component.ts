import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/citas-card.models';
<<<<<<< HEAD
import { CitasCardService } from 'src/app/services/Citas/citas-card.service';
=======
import { CitasService } from 'src/app/services/citas/citas.service';

>>>>>>> testing

@Component({
  selector: 'app-sesion-personal-citas-doctor',
  templateUrl: './sesion-personal-citas-doctor.component.html',
  styleUrls: ['./sesion-personal-citas-doctor.component.less']
})
export class SesionPersonalCitasDoctorComponent implements OnInit {

<<<<<<< HEAD

  public citas: Cita[];
  public screenHeight: number;

  constructor(private citasCard: CitasCardService) {
  }
  
  ngOnInit(): void {

    let { height } = window.screen;
    

    this.screenHeight = height;
    this.citas = this.citasCard.getAllProducts();
=======
  public citas: Cita[];
  public screenHeight: number;

  constructor(private citasCard: CitasService) {
>>>>>>> testing
  }
  
  ngOnInit(): void {

    let { height } = window.screen;
    

    this.screenHeight = height;
    this.citas = this.citasCard.getAllProducts();
  }
}