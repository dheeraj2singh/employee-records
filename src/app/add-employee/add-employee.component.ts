
import { Employee } from './../employee.model';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { EmpService } from './../emp.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  addempServices: EmpService = new EmpService;

  constructor() {
    
    
   }

  onsubmit(data:Employee){
    
    console.log(data);
    this.addempServices.addEmployee(data);
  }
  ngOnInit(): void {
    this.employee.firstname="";
    this.employee.lastname="";
    this.employee.email="";
  }

}
