import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionUsuarioMiperfilComponent } from './sesion-usuario-miperfil.component';

describe('SesionUsuarioMiperfilComponent', () => {
  let component: SesionUsuarioMiperfilComponent;
  let fixture: ComponentFixture<SesionUsuarioMiperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionUsuarioMiperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionUsuarioMiperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
