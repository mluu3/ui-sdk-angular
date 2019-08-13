import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private cookieService: CookieService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) : Observable<any>{
        var body = {
            "postUserLogin":{
                "login":"tu.bui@gooddata.com",
                "password":"changeit",
                "remember":1,
                "verify_level":0
            }
        }

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        let options = { 
            headers: headers,
            observe: 'response' as 'body',
            withCredentials: true
        };

        var ret = this.http.post<any>(`${environment.apiUrl}/gdc/account/login`, body, options);        
        ret.subscribe(resp => {
            console.log(resp);
            console.log(resp.headers)
            var setCookieHeader = resp.headers.get('Set-Cookie');
            console.log(setCookieHeader)
            //this.cookieService.set( 'GDCAuthSST', 'Hello World' );
            //this.cookieService.set( 'GDCAuthTT', 'Hello World' );
            return resp;
        }, err => {
            console.log("===> Error");
            console.log(err);
        });
        return ret;

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}