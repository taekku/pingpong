import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpDynamicFormComponent } from './pp-dynamic-form.component';

describe('PpDynamicFormComponent', () => {
  let component: PpDynamicFormComponent;
  let fixture: ComponentFixture<PpDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
