import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrAsignaturaComponent } from './qr-asignatura.component';

describe('QrAsignaturaComponent', () => {
  let component: QrAsignaturaComponent;
  let fixture: ComponentFixture<QrAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrAsignaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
