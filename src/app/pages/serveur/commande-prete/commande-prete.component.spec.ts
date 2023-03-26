import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandePreteComponent } from './commande-prete.component';

describe('CommandePreteComponent', () => {
  let component: CommandePreteComponent;
  let fixture: ComponentFixture<CommandePreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandePreteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandePreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
