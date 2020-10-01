import { Injectable } from '@angular/core';
import { Cita } from 'src/app/models/citas-card.models';
import { CITAS } from './CITAS.const';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private citas: Cita[];
  constructor() {
    this.citas = CITAS
  }
  
  public getAllProducts(): Cita[] {
    return this.citas;
  }

  public getProductByID(id: number|string): Cita {
    return this.citas.find((product: Cita) => product._id.toString() === id )
  }
}