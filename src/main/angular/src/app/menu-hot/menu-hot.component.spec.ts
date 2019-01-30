import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHotComponent } from './menu-hot.component';
import { MyMaterialModule } from '../my-material/my-material.module';

describe('MenuHotComponent', () => {
  let component: MenuHotComponent;
  let fixture: ComponentFixture<MenuHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHotComponent ],
      imports: [
        MyMaterialModule
      ]
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
