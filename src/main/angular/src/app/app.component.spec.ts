import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MyMaterialModule } from './my-material/my-material.module';
import { MenuHotComponent } from './menu-hot/menu-hot.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { PpModule } from './pp/pp.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        MenuHotComponent,
        MenuLeftComponent,
      ],
      imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,

        MyMaterialModule,
        AuthModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular!');
  });
});
