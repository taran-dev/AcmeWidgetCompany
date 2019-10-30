import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityComponent } from './userActivity.component';

describe('UserComponent', () => {
  let component: UserActivityComponent;
  let fixture: ComponentFixture<UserActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
