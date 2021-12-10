import { EmpService } from './../emp.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  emplist:Employee[]=[

  ];
  constructor(empService:EmpService) {
    this.emplist=empService.getAll();
    console.log("constructor");
    console.log(this.emplist);
    for(var emp in this.emplist){
      console.log(emp);
    }
   }

  ngOnInit(): void {
  }
delete(id:any){
  console.log("delete called with "+id)
}
}
