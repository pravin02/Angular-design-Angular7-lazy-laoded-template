import { HttpClient } from '@angular/common/http';
import { Response } from '../../models/response.model';
import { Injectable } from '@angular/core';
import { BaseUrlProvider } from '../../providers/base-url.provider';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, private baseUrl: BaseUrlProvider) { }

    public login(username: string, password: string): Observable<Response<User>> {
        return this.http.post<Response<User>>(`${this.baseUrl.baseUrl()}/login`, { username, password });
    }
}