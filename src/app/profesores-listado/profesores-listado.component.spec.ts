import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresListadoComponent } from './profesores-listado.component';

describe('ProfesoresListadoComponent', () => {
  let component: ProfesoresListadoComponent;
  let fixture: ComponentFixture<ProfesoresListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
