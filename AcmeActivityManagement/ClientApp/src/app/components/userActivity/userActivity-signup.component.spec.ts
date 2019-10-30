import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivitySignUpComponent } from './userActivity-signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('UserActivitySignupComponent', () => {
    let component: UserActivitySignUpComponent;
    let fixture: ComponentFixture<UserActivitySignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [UserActivitySignUpComponent],
        imports: [FormsModule, HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(UserActivitySignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
