import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVraiComponent } from './menu-vrai.component';

describe('MenuVraiComponent', () => {
  let component: MenuVraiComponent;
  let fixture: ComponentFixture<MenuVraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVraiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuVraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
