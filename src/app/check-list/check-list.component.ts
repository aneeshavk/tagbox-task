import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";
import { Component } from "@angular/core";
import { User } from '../models/checklist.model';
import { CheckListService } from "../services/checklist.service";

@Component({
  selector: "app-check-list",
  templateUrl: "./check-list.component.html",
  styleUrls: ["./check-list.component.scss"],
})
export class CheckListComponent {
  users: User;
  total: number;
  perPage: number;
  constructor(private _checkList: CheckListService) {
    this.getUsers();
  }

  public getUsers() {
    this._checkList.listUsers().subscribe((r) => {
      if (r.data) {
        this.users = r.data;
        this.total = r.total;
        this.perPage = r.per_page;
      } else {
        console.log(r);
      }
    });
  }
}
