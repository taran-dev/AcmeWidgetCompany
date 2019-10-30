import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivityService } from '../../services/activity.service';
import { User } from '../../shared/models/user.model';

@Component({
    selector: 'app-userActivity-list',
    templateUrl: './userActivity-list.component.html',
    styleUrls: ['./userActivity.component.css'],
})
export class UserActivityListComponent implements OnInit {

    users: any;
    activities: any;

    ngOnInit() {
        var self = this;

        self.userService.getUsers().subscribe(uResult => {
            self.users = uResult;
            console.log(self.users);

            self.getActivityForUsers(self.users);

        });

    }

    public getActivityForUsers(users: Array<User>) {
        var self = this;

        self.activityService.getActivities().subscribe(aResult => {
            self.activities = aResult;
            console.log(self.activities);

            for (var i = 0; i < users.length; i++) {
                for (var j = 0; j < self.activities.length; j++) {
                    if (users[i].activityId == self.activities[j].id) {
                        users[i].activityName = self.activities[j].name;
                        break;
                    }
                }
            }

        });
    }

    constructor(
        private userService: UserService,
        private activityService: ActivityService
    ) {

    }

}
