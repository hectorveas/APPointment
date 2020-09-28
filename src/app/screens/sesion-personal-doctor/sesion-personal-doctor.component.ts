import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion-personal-doctor',
  templateUrl: './sesion-personal-doctor.component.html',
  styleUrls: ['./sesion-personal-doctor.component.less']
})
export class SesionPersonalDoctorComponent implements OnInit {
  public URLfoto: string;
  constructor() {
      this.URLfoto='https://falabella.scene7.com/is/image/Falabella/12005138_1?wid=1500&hei=1500&qlt=70';
   }

  ngOnInit(): void {
  }

}
