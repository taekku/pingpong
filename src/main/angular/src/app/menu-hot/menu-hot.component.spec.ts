import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHotComponent } from './menu-hot.component';

describe('MenuHotComponent', () => {
  let component: MenuHotComponent;
  let fixture: ComponentFixture<MenuHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
