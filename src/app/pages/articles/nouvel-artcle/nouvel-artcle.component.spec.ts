import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelArtcleComponent } from './nouvel-artcle.component';

describe('NouvelArtcleComponent', () => {
  let component: NouvelArtcleComponent;
  let fixture: ComponentFixture<NouvelArtcleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelArtcleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelArtcleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
