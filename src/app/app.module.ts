
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import {  HttpClientModule } from  '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DataTablesModule } from 'angular-datatables';
import {MatSortModule} from '@angular/material/sort';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter'; 

@NgModule({
  declarations: [

    AppComponent,
    NavBarComponent,
    ListEmployeesComponent,
    AddEmployeeComponent,
    DetailsEmployeeComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
