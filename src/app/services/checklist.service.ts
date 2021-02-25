import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PageRes, User } from '../models/checklist.model';

@Injectable({
  providedIn: "root",
})
export class CheckListService {
  constructor(private _http: HttpClient) {}

  baseUrl = 'https://reqres.in/'

  public listUsers() {
      return this._http.get<PageRes<User>>(`${this.baseUrl}api/users`)
  }
}
