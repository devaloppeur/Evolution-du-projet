import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTrueComponent } from './menu_true.component';

describe('MenuTrueComponent', () => {
  let component: MenuTrueComponent;
  let fixture: ComponentFixture<MenuTrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTrueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
