import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar-cita-card',
  templateUrl: './eliminar-cita-card.component.html',
  styleUrls: ['./eliminar-cita-card.component.less']
})
export class EliminarCitaCardComponent implements OnInit {

  @Input()
  citaId: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
