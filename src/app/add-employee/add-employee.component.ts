import { Observable } from 'rxjs';
import { Designation } from './../designation.model';

import { Employee } from './../employee.model';
import { Component, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';
import { EmpService } from './../emp.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  designations!:Observable<Designation[]>;
  submitted=false;
  errors!:any;
  
   

  constructor(private addempServices: EmpService,
    private router: Router) { }
  ngOnInit(): void {
    
    this.designations=this.addempServices.getDesignation();

    
  }

  // to create the new employee
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
//  function which calls the service
  save(addform:NgForm) {
    
    this.addempServices.createEmployee(this.employee)
      .subscribe(data=> {console.log(data),this.submitted=true ,this.gotoList()},error => {console.log(error.error),this.errors=error.error,this.submitted=false} );
    this.employee = new Employee();
    
    addform.resetForm(); 
    
    
  }

  //  on submit method which accepts the form 
  onSubmit(addform:NgForm) {
    this.save(addform); 
    
    
  }

  // function  which navigate to the lis page
  gotoList() {
    
    this.router.navigate(["/",'list-employees'],);
  }

}


