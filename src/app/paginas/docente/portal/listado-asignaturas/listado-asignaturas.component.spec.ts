import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAsignaturasComponent } from './listado-asignaturas.component';

describe('ListadoAsignaturasComponent', () => {
  let component: ListadoAsignaturasComponent;
  let fixture: ComponentFixture<ListadoAsignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAsignaturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
