import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConsultarComponent } from './formulario-consultar.component';

describe('FormularioConsultarComponent', () => {
  let component: FormularioConsultarComponent;
  let fixture: ComponentFixture<FormularioConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
