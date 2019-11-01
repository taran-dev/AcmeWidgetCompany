import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserActivityComponent } from './userActivity.component';
import { UserActivitySignUpComponent } from './userActivity-signup.component';
import { UserActivityListComponent } from './userActivity-list.component';

import { ActivityService } from '../../services/activity.service';
import { UserService } from '../../services/user.service';
import { UserActivityActivitySelectComponent } from './userActivity-activityselect.component';

@NgModule({
    declarations: [
        UserActivityComponent,
        UserActivitySignUpComponent,
        UserActivityListComponent,
        UserActivityActivitySelectComponent
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: '', component: UserActivityComponent },
            { path: 'signup/:activityId', component: UserActivitySignUpComponent },
            { path: 'list', component: UserActivityListComponent },
            { path: 'activity', component: UserActivityActivitySelectComponent },
        ])
    ],
    providers: [ActivityService, UserService],
    bootstrap: [UserActivityComponent]
})
export class UserActivityModule { }
