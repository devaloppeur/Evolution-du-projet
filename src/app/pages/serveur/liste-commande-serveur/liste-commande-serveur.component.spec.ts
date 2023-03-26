import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommandeServeurComponent } from './liste-commande-serveur.component';

describe('ListeCommandeServeurComponent', () => {
  let component: ListeCommandeServeurComponent;
  let fixture: ComponentFixture<ListeCommandeServeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCommandeServeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCommandeServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
