import { Component, Input, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/citas-card.models';

@Component({
  selector: 'app-consultas-card',
  templateUrl: './consultas-card.component.html',
  styleUrls: ['./consultas-card.component.less']
})
export class ConsultasCardComponent implements OnInit {

  @Input()
  public cita: Cita;
  constructor() { }

  ngOnInit(): void {
  }

}
