import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../shared/models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

    private activitiesUrl: string = "/api/activities"; // URL to web api

    //Get Activities from Server
    getActivities() : Observable<Activity[]> {
        var self = this;

        return self.http.get<Activity[]>(self.activitiesUrl)
            .pipe(

            ); //TODO: Catch Error
    }

    constructor(private http: HttpClient) {
    }
}
