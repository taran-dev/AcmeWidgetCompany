import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { UserActivityComponent } from './userActivity.component';
import { UserActivitySignUpComponent } from './userActivity-signup.component';

@NgModule({
    declarations: [
        UserActivityComponent,
        UserActivitySignUpComponent
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: UserActivityComponent },
            { path: 'signup', component: UserActivitySignUpComponent },
        ])
    ],
    providers: [],
    bootstrap: [UserActivityComponent]
})
export class UserActivityModule { }
