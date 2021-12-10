import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';

const routes: Routes = [
{path:"", component:ListEmployeesComponent, pathMatch:"full" },
{path:"list-employees", component:ListEmployeesComponent},
{path:"add-employee", component:AddEmployeeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
