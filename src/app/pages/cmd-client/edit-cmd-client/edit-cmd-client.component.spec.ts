import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCmdClientComponent } from './edit-cmd-client.component';

describe('EditCmdClientComponent', () => {
  let component: EditCmdClientComponent;
  let fixture: ComponentFixture<EditCmdClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCmdClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCmdClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
