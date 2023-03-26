import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauLivreurComponent } from './nouveau-livreur.component';

describe('NouveauLivreurComponent', () => {
  let component: NouveauLivreurComponent;
  let fixture: ComponentFixture<NouveauLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauLivreurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
