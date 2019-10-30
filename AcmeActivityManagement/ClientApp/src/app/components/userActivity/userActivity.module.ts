import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserActivityComponent } from './userActivity.component';
import { UserActivitySignUpComponent } from './userActivity-signup.component';
import { ActivityService } from '../../services/activity.service';
import { UserService } from '../../services/user.service';

@NgModule({
    declarations: [
        UserActivityComponent,
        UserActivitySignUpComponent
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: '', component: UserActivityComponent },
            { path: 'signup', component: UserActivitySignUpComponent },
        ])
    ],
    providers: [ActivityService, UserService],
    bootstrap: [UserActivityComponent]
})
export class UserActivityModule { }
