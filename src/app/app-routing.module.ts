import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddDesignationComponent } from './add-designation/add-designation.component';

const routes: Routes = [
{path:"", component:ListEmployeesComponent, pathMatch:"full" },
{path:"list-employees", component:ListEmployeesComponent},
{path:"add-employee", component:AddEmployeeComponent},
{path:"details/:id" , component:DetailsEmployeeComponent},
{path:"update/:id", component:UpdateEmployeeComponent},
{path:"add-designation", component:AddDesignationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
