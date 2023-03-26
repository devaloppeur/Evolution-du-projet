import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelClientComponent } from './nouvel-client.component';

describe('NouvelClientComponent', () => {
  let component: NouvelClientComponent;
  let fixture: ComponentFixture<NouvelClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
