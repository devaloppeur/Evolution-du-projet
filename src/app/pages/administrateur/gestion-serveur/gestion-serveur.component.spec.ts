import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionServeurComponent } from './gestion-serveur.component';

describe('GestionServeurComponent', () => {
  let component: GestionServeurComponent;
  let fixture: ComponentFixture<GestionServeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionServeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
