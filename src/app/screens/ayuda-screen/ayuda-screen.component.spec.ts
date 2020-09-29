import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaScreenComponent } from './ayuda-screen.component';

describe('AyudaScreenComponent', () => {
  let component: AyudaScreenComponent;
  let fixture: ComponentFixture<AyudaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
