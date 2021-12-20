import { EmpService } from './../emp.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees!: Observable<Employee[]>;
  @Input() result!:boolean;
  responcedeleted!:any;
  responcedata!:any;
  sortedata!:Employee[];
  
// constructor which initilaze the objects of classes
  constructor(private employeeService: EmpService,
    private router: Router) {
     
    }
    
    // init method which initilize when lis page render to router outlet
  ngOnInit() {
    this.reloadData();
  }

  // function which refresh the data (e.g., in case of updation)
  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }


  // function to delete the employee
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.responcedata=data;
          this.responcedeleted=true;
          this.reloadData();
        },
        error => console.log(error));
        
  }

  // function to navigate the router to details page

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }


  // function to navigate the router to update component
  updateEmployee(id:number){
    this.router.navigate(['update',id]);
  }
    
  sortData(sort:Sort){

  }
}
