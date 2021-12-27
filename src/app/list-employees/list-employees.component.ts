import { Employee } from './../employee.model';
import { EmpService } from './../emp.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees!: Observable<Employee[]>;
  searchterm!:any;
  responcedeleted!:any;
  responcedata!:any;
 p:number=1;
 key!:string;
 reverse:boolean=false;
 
  
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
   
  sortData(key:string){
    this.key=key;
    this.reverse=!this.reverse;

  }


 
  
}
