import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-userActivity-signup',
    templateUrl: './userActivity-signup.component.html',
    styleUrls: ['./userActivity.component.css'],
})
export class UserActivitySignUpComponent implements OnInit {

    activities: any;
    user: User;
    userActivityForm;
    activityId: number;
    activityName: string = "";

    ngOnInit() {
        var self = this;
        self.user = new User();

        var param = self.route.snapshot.paramMap.get("activityId");
        self.activityId = parseInt(param);

        self.activityService.getActivities().subscribe(result => {
            self.activities = result;

            var item = result.filter(x => x.id == self.activityId);
            self.user.activityName = item[0].name;
            self.activityName = item[0].name;
        });

    }

    public submitForm(formData: any) {
        var self = this;

        console.log(formData);

        self.user = new User();
        self.user.firstName = formData.firstName;
        self.user.lastName = formData.lastName;
        self.user.email = formData.email;
        self.user.activityId = self.activityId;
        self.user.comment = formData.comment;

        self.userService.addUserActivity(self.user).subscribe(result => {
            console.log(result);

            self.router.navigateByUrl('/useractivity/list');

        });

        self.userActivityForm.reset();
    }

    constructor(
        private activityService: ActivityService,
        private userService: UserService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
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
