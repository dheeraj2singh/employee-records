import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from './../emp.service';
import { Employee } from './../employee.model';
import { NgForm,Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!:number;
  employee:Employee = new Employee();
  updated:boolean=false;
  
  constructor(private updateservice:EmpService,private route:ActivatedRoute,private router:Router) { 
   
   
  }
// init method which display the data in the html input fields when the method called
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.updateservice.getEmployee(this.id)
    .subscribe(data => {
      console.log(data)
      this.employee = data;
      
    }, error => console.log(error));
    this.updated=false;
  }


    // this is onsubmit method which is binded to the form
  onSubmit(updateform:NgForm){
    console.log(this.employee);
        this.updateservice.updateEmployee(this.id,this.employee).subscribe(data =>{this.list()});
        this.updated=true;
        
        
        
  }

  // na vigate to the list component
  list(){
    this.router.navigate(["/",'list-employees']);
  }
}
