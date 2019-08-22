import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BaseUrlProvider {

    private readonly BASE_URL = "http://localhost:8080";

    public baseUrl(): string {
        return `${this.BASE_URL}/api/v1`;
    }

    public ProfileUrl(): string {
        return `${this.BASE_URL}/uploads/images/`;
    }

}