import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {Observable} from "rxjs";
import {By} from "@angular/platform-browser";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj(['getUsers']);
    spy.getUsers.and.returnValue(
      new Observable((ob) => {
        ob.next(`[
        {
          name: 'Ayush',
          email: 'ayush@gmail.com',
          password: 'pass@1',
          role: 'user',
        },
        {
          name: 'Ayush Singhal',
          email: 'ayu@gmail.com',
          password: 'password',
          role: 'admin',
        }
      ]`);
      })
    );
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientTestingModule,FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check if the form is valid or not filling input fields', () => {
    component.loginForm.controls['email'].setValue('abc@gmail.com')
    component.loginForm.controls['password'].setValue('1234abcd')
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should check if the form is submitted', () => {
    expect(component.loginForm.valid).toBeFalsy();
    let lBtn = fixture.debugElement.query(By.css('#login-btn'));
    expect(lBtn.nativeElement.disabled).toBeTruthy();
    component.loginForm.controls['email'].setValue('abc@gmail.com')
    component.loginForm.controls['password'].setValue('1234abcd')
    fixture.detectChanges()
    expect(lBtn.nativeElement.disabled).toBeFalsy()
  })
});
