import { observable, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from './../emp.service';
import { Employee } from './../employee.model';
import { NgForm,Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Designation } from '../designation.model';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!:number;
  employee:Employee = new Employee();
  updated:boolean=false;
  designations!:Observable<Designation[]>;
  
  constructor(private updateservice:EmpService,private route:ActivatedRoute,private router:Router) { 
   
   
  }
// init method which display the data in the html input fields when the method called
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.designations=this.updateservice.getDesignation();
    
    this.updateservice.getEmployee(this.id)
    .subscribe(data => {
      
      this.employee = data;
      
    }, error => console.log(error));
    this.updated=false;
  }


    // this is onsubmit method which is binded to the form
  onSubmit(updateform:NgForm){
        this.updateservice.updateEmployee(this.id,this.employee).subscribe(data =>{this.list()});
        this.updated=true;
        
        
        
  }

  // navigate to the list component
  list(){
    this.router.navigate(["/",'list-employees']);
  }
}
