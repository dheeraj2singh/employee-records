
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

   baseUrl:string="http://127.0.0.1:8080/employee";
  // employees:Employee[]=[{id :1,name:"dheeraj",address:"delhi", email:"dheeraj@gmail.com",salary:25000,phone:1234567890},];
 
  constructor(private http:HttpClient) { }
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    console.log(employee);
    return this.http.post(`${this.baseUrl}/`, employee);
  }

  updateEmployee(id: number, value: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
 
}
