import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../../models/response.model';
import { Dashboard } from '../models/dashboard.model';
import { BaseUrlProvider } from '../../../providers/base-url.provider';


@Injectable()
export class DashboardService {

    constructor(private http: HttpClient, private baseUrl: BaseUrlProvider) { }

    public getDashboard(): Observable<Response<Dashboard>> {
        return this.http.get<Response<Dashboard>>(`${this.baseUrl.baseUrl()}/dashboard`);
    }

}