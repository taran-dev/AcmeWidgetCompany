import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';

@Component({
    selector: 'app-userActivity-activityselect',
    templateUrl: './userActivity-activityselect.component.html',
    styleUrls: ['./userActivity.component.css'],
})
export class UserActivityActivitySelectComponent implements OnInit {

    activities: any;

    ngOnInit() {
        var self = this;

        self.activityService.getActivities().subscribe(aResult => {
            self.activities = aResult;
            console.log(self.activities);
        });

    }

    constructor(
        private activityService: ActivityService
    ) {

    }

}
