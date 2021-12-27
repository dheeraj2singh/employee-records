import { Designation } from './designation.model';

import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


// this is a  employee service class
@Injectable({
  providedIn: 'root'
})
export class EmpService {
 
  url:string="http://localhost:8080/Designation";
  //  baseUrl:string="http://127.0.0.1:8080/employee";
   testUrl:string="http://localhost:8080/employee";
  // employees:Employee[]=[{id :1,name:"dheeraj",address:"delhi", email:"dheeraj@gmail.com",salary:25000,phone:1234567890},];
 

  constructor(private http:HttpClient) {
    
    
   }

  // for get  Employee
  getEmployee(id: number): Observable<any> {
    // return this.http.get(`${this.baseUrl}/${id}`);
    return this.http.get(`${this.testUrl}/${id}`);
  }
 // to create the employee
  createEmployee(employee: Object): Observable<any> {
    
    // return this.http.post(`${this.baseUrl}/`, employee);
    return this.http.post(`${this.testUrl}/`, employee, { responseType: 'text' });
  }

   // to update the details
  updateEmployee(id: number, value: Object): Observable<Object> {
    // return this.http.post(`${this.baseUrl}/${id}`, value);
    return this.http.put(`${this.testUrl}/${id}`, value);
  }
// to delete tthe employee
  deleteEmployee(id: number): Observable<any> {
    // return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    return this.http.delete(`${this.testUrl}/${id}`, { responseType: 'text' });
  }
 // to get the list of employee
  getEmployeesList(): Observable<any> {
    // return this.http.get(`${this.baseUrl}/`);
    return this.http.get(`${this.testUrl}/`);
  }

  getDesignation(): Observable<any>{
    
    return this.http.get(`${this.url}/`);
  }
 
}
