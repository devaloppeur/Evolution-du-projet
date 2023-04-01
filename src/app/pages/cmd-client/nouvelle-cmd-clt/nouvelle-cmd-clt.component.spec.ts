import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCmdCltComponent } from './nouvelle-cmd-clt.component';

describe('NouvelleCmdCltComponent', () => {
  let component: NouvelleCmdCltComponent;
  let fixture: ComponentFixture<NouvelleCmdCltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCmdCltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleCmdCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
