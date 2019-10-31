import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user.model';

@Component({
    selector: 'app-userActivity-signup',
    templateUrl: './userActivity-signup.component.html',
    styleUrls: ['./userActivity.component.css'],
})
export class UserActivitySignUpComponent implements OnInit {

    activities: any;
    user: User;
    userActivityForm;

    ngOnInit() {
        var self = this;

        self.activityService.getActivities().subscribe(result => {
            self.activities = result;
            console.log(self.activities);
        });

    }

    public submitForm(formData: any) {
        var self = this;

        console.log(formData);

        self.user = new User();
        self.user.firstName = formData.firstName;
        self.user.lastName = formData.lastName;
        self.user.email = formData.email;
        self.user.activityId = parseInt(formData.activitySelect);
        self.user.comment = formData.comment;

        self.userService.addUserActivity(self.user).subscribe(result => {
            console.log(result);
        });

        self.userActivityForm.reset();
    }

    constructor(
        private activityService: ActivityService,
        private userService: UserService,
        private formBuilder: FormBuilder,
    ) {

        var self = this;

        self.userActivityForm = self.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.email],
            activitySelect: 0,
            comment: ['', Validators.required]
        });
    }

}
