import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLigneCmdComponent } from './edit-ligne-cmd.component';

describe('EditLigneCmdComponent', () => {
  let component: EditLigneCmdComponent;
  let fixture: ComponentFixture<EditLigneCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLigneCmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLigneCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
