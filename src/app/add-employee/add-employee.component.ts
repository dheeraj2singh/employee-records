
import { Employee } from './../employee.model';
import { Component, OnInit, Output, Input } from '@angular/core';
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
  submitted=false;
   
  @Output() result!:string;

  constructor(private addempServices: EmpService,
    private router: Router) { }
  ngOnInit(): void {
    
  }
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save(addform:NgForm) {
    this.addempServices.createEmployee(this.employee)
      .subscribe(data=> {console.log(data), this.result=data,this.gotoList()},error => console.log(error));
    this.employee = new Employee();
    addform.resetForm();
    
    
  }

  onSubmit(addform:NgForm) {
    this.submitted = true;
    this.save(addform); 
    
    
  }

  gotoList() {
    
    this.router.navigate(["/",'list-employees']);
  }

}


