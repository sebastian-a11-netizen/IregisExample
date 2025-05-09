import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InSesionPage } from './in-sesion.page';

describe('InSesionPage', () => {
  let component: InSesionPage;
  let fixture: ComponentFixture<InSesionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
