import { Component, OnInit } from '@angular/core';
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

    ngOnInit() {
        var self = this;

        self.activityService.getActivities().subscribe(result => {
            self.activities = result;
            console.log(self.activities);
        });

    }

    public submitForm(form: any) {
        var self = this;

        console.log(form);

        self.user = new User();
        self.user.firstName = form.firstName;
        self.user.lastName = form.lastName;
        self.user.email = form.email;
        self.user.activityId = parseInt(form.activity);
        self.user.comment = form.comment;

        //self.userService.addUserActivity(self.user).subscribe(result => {
        //    console.log(result);
        //});
    }

    constructor(
        private activityService: ActivityService,
        private userService: UserService
    ) {

    }

}
