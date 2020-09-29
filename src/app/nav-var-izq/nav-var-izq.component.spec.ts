import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVarIzqComponent } from './nav-var-izq.component';

describe('NavVarIzqComponent', () => {
  let component: NavVarIzqComponent;
  let fixture: ComponentFixture<NavVarIzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavVarIzqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVarIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
