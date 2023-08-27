import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGetStartedComponent } from './login-get-started.component';

describe('LoginGetStartedComponent', () => {
  let component: LoginGetStartedComponent;
  let fixture: ComponentFixture<LoginGetStartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginGetStartedComponent]
    });
    fixture = TestBed.createComponent(LoginGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
