
import { Employee } from './../employee.model';
import { Component, OnInit } from '@angular/core';
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

  constructor(private addempServices: EmpService,
    private router: Router) { }
  ngOnInit(): void {
    
  }
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.addempServices.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit(addform:NgForm) {
    this.submitted = true;
    alert(" Employee added successfully")
    this.save();  
    
  }

  gotoList() {
    
    this.router.navigate(['list-employees']);
  }

}
