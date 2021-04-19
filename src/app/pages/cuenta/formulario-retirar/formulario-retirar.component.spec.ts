import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRetirarComponent } from './formulario-retirar.component';

describe('FormularioRetirarComponent', () => {
  let component: FormularioRetirarComponent;
  let fixture: ComponentFixture<FormularioRetirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRetirarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRetirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
