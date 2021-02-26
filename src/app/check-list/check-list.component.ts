import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SaTableFilters } from 'ng-sa-data-table';
import { User } from '../models/checklist.model';
import { CheckListService } from '../services/checklist.service';

@Component({
    selector: 'app-check-list',
    templateUrl: './check-list.component.html',
    styleUrls: ['./check-list.component.scss'],
})
export class CheckListComponent {

    users: User;

    total: number;

    perPage: number;

    createCheckList = false;

    searchWord: string;

    constructor(private checkList: CheckListService) {}

    public getUsers(filters: SaTableFilters) {
        this.checkList.listUsers(filters.page, filters.perPage).subscribe((r) => {
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
