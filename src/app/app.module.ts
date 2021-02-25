import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SidebarComponent } from "./sidebar/sidebar.component";
import { CheckListComponent } from "./check-list/check-list.component";
import { LayoutComponent } from "./layout/layout.component";
import { NgSaDataTableModule } from "ng-sa-data-table";
import { CheckListService } from "./services/checklist.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    CheckListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSaDataTableModule,
    HttpClientModule,
  ],
  providers: [CheckListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
