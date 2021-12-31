import { Certification } from './../certification.model';
import { observable, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from './../emp.service';
import { Employee } from './../employee.model';
import { NgForm,Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Designation } from '../designation.model';
import { CeritificationService } from '../ceritification.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { data } from 'jquery';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!:number;
  cert!:Certification;
  emplist!:Certification[];
  employee:Employee = new Employee();
  updated:boolean=false;
  designations!:Observable<Designation[]>;
  certifications!:Certification[];
  dummyList:Certification[]=[];
  
  constructor(private updateservice:EmpService,private route:ActivatedRoute,private router:Router,private certService:CeritificationService) { 
   
   
  }
// init method which display the data in the html input fields when the method called
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.designations=this.updateservice.getDesignation();
     this.certService.getAllCert().subscribe(data =>{this.certifications=data});
     
    this.updateservice.getEmployee(this.id)
    .subscribe(data => {
      console.log(data);
      this.employee = data,
      this.dummyList=this.employee.certificates;
      
    }, error => console.log(error));
    this.updated=false;
    this.dummyList=this.employee.certificates;
  }


    // this is onsubmit method which is binded to the form
  onSubmit(updateform:NgForm){
        
        this.employee.certificates=this.dummyList;
      console.log(this.employee)
        this.updateservice.updateEmployee(this.id,this.employee).subscribe(data =>{ console.log(data) ,this.list()});
        this.updated=true;
        
        
        
  }

  // navigate to the list component
  list(){
    this.router.navigate(["/",'list-employees']);
  }

  onChangeCertificates(cert: Certification, target: any) {
  
   console.log(target.checked,cert);
   if(target.checked){

   this.dummyList.push(cert) ;
   console.log(this.dummyList);
   
   
  }else{
    let index =this.dummyList.findIndex(x => x.id===cert.id);
    this.dummyList.splice(index,1);
    console.log(this.dummyList);

  }

  }


  removeCertificate(cert:any){
    let index=  this.dummyList.findIndex(x => x.id==cert.id)
    this.dummyList.splice(index,1);
  }


}
