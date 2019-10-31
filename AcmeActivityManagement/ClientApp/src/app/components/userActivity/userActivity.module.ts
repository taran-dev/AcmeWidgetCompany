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

@NgModule({
    declarations: [
        UserActivityComponent,
        UserActivitySignUpComponent,
        UserActivityListComponent
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: '', component: UserActivityComponent },
            { path: 'signup', component: UserActivitySignUpComponent },
            { path: 'list', component: UserActivityListComponent },
        ])
    ],
    providers: [ActivityService, UserService],
    bootstrap: [UserActivityComponent]
})
export class UserActivityModule { }
