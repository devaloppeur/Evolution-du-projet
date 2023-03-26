import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauServeurComponent } from './nouveau-serveur.component';

describe('NouveauServeurComponent', () => {
  let component: NouveauServeurComponent;
  let fixture: ComponentFixture<NouveauServeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauServeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
