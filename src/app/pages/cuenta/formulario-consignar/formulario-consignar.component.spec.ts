import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConsignarComponent } from './formulario-consignar.component';

describe('FormularioConsignarComponent', () => {
  let component: FormularioConsignarComponent;
  let fixture: ComponentFixture<FormularioConsignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioConsignarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioConsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
