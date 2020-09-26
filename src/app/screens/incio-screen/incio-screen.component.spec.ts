import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioScreenComponent } from './incio-screen.component';

describe('IncioScreenComponent', () => {
  let component: IncioScreenComponent;
  let fixture: ComponentFixture<IncioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncioScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
