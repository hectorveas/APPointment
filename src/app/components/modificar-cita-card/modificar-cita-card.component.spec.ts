import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCitaCardComponent } from './modificar-cita-card.component';

describe('ModificarCitaCardComponent', () => {
  let component: ModificarCitaCardComponent;
  let fixture: ComponentFixture<ModificarCitaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCitaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCitaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
