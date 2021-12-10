
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

   baseurl:string="http://localhost:8080/employee";
  employees:Employee[]=[{id :1,firstname:"dheeraj",lastname:"singh", email:"dheeraj@gmail.com"},
{id :2,firstname:"jay",lastname:"pande", email:"jay@gmail.com"},
];
      len!:any;

 
  constructor() { }

  public addEmployee(emp:Employee){
    console.log("addemployee");
     this.len=this.employees.length;
     emp.id=4;
    this.employees.push(emp);
    console.log(this.employees);

  }

  getAll(){
    return this.employees;
  }
  get(id:any){
     return 0;

  }
}
