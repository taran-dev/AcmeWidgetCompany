import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivitySignUpComponent } from './userActivity-signup.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivityService } from '../../services/activity.service';
import { UserService } from '../../services/user.service';

import { Observable, from, empty } from 'rxjs';

import { Activity } from '../../shared/models/activity.model';
import { User } from '../../shared/models/user.model';

describe('UserActivitySignupComponent', () => {
    let component: UserActivitySignUpComponent;
    let fixture: ComponentFixture<UserActivitySignUpComponent>;
    var activityService: ActivityService;
    var userService: UserService;

    beforeEach(() => {

      TestBed.configureTestingModule({
        declarations: [UserActivitySignUpComponent],
        imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
        providers: [ActivityService, UserService]
      }).compileComponents();

      activityService = TestBed.get(ActivityService);
      userService = TestBed.get(UserService);

      fixture = TestBed.createComponent(UserActivitySignUpComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();

    });

    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    /* Tests to make sure fields are required */
    it('should be valid when all required fields are set', () => {

        let firstName = component.userActivityForm.controls["firstName"];
        firstName.setValue("Road");

        let lastName = component.userActivityForm.controls["lastName"];
        lastName.setValue("Runner");

        let email = component.userActivityForm.controls["email"];
        email.setValue("roadrunner@acme.com");

        let comment = component.userActivityForm.controls["comment"];
        comment.setValue("Beep! Beep!");

        expect(component.userActivityForm.valid).toBeTruthy();
    });

    /* Test to get activities */
    it('should set activities property with items returned from the server', async () => {
        let activities: Activity[] = [{ id: 1, name: 'Swimming' }, { id: 2, name: 'Cycling' }, { id: 3, name: 'Running' }];
        spyOn(activityService, 'getActivities').and.callFake(() => {
            return from([activities]);
        });

        component.ngOnInit();

        var otherActivities = await component.activities;

        expect(otherActivities).toBe(activities);
    });

    /* Test to add user activity */
    it('should call the server to save changes when a new User Activity is added', async () => {

        let formData = new User();
        formData.activityId = 1;
        formData.activityName = "Swimming";
        formData.comment = "Swimming is great to build stamina";
        formData.email = "will.e.coyote@acme.com";
        formData.firstName = "Will";
        formData.lastName = "Coyote";

        let spy = spyOn(userService, 'addUserActivity').and.callFake(() => {
            return empty();
        });

        await component.submitForm(formData);

        expect(spy).toHaveBeenCalled();

    });

});
