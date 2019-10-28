import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

    private usersUrl: string = "/api/users"; // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    //Get Users from Server
    getUsers(): Observable<User> {
        var self = this;

        return self.http.get<User>(self.usersUrl)
            .pipe(

            ); //TODO: Catch Error
    }

    //Add Users Activity to Server
    addUserActivity(user: User): Observable<User> {
        var self = this;

        return self.http.post<User>(self.usersUrl, user, self.httpOptions)
          .pipe(
            
          ); //TODO: Catch Error
    }
    constructor(private http: HttpClient) {
    }
}
