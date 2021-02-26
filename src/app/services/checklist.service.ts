import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageRes, User } from '../models/checklist.model';

@Injectable({
    providedIn: 'root',
})
export class CheckListService {
    constructor(private http: HttpClient) {}

    baseUrl = 'https://reqres.in/';

    public listUsers(page: number, perPage: number) {
        const params = new HttpParams().set('page', page.toString()).set('per_page', perPage.toString());
        return this.http.get<PageRes<User>>(`${this.baseUrl}api/users`, { params });
    }
}
