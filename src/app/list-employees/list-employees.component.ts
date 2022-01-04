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
 currentPage:number=0;
 totalPages!:number;
 itemsPerPage!:number;
 totalItems!:number;
 cpage:number=0;
 status:any;



// constructor which initilaze the objects of classes
  constructor(private employeeService: EmpService,
    private router: Router) {
     
    }
    
    // init method which initilize when lis page render to router outlet
  ngOnInit() {
    this.itemsPerPage=4;
    this.reloadData();
  }

  // function which refresh the data (e.g., in case of updation)
  reloadData() {
    this.employeeService.getEmployeesList(this.cpage,this.itemsPerPage).subscribe(data => {
      this.employees=data["content"],
      this.itemsPerPage=data["size"],
      this.totalPages=data["totalPages"],
      this.totalItems=data["totalElements"],console.log(data);
      
    });
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


  handlePageChange(event:any){

    console.log(event);
    this.cpage=event-1;
    console.log(this.cpage);
    this.currentPage=event;
    this.reloadData()
    console.log(this.itemsPerPage)
  }
 
  onChange(){
    this.reloadData();
  }
}
