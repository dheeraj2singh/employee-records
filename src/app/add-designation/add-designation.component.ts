import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Designation } from '../designation.model';
import { DesignationService } from '../designation.service';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {

  desig: Designation =new Designation();

  desigList!:Observable<Designation[]>;

  constructor(private createDesig:DesignationService,
  private router:Router) { }

  ngOnInit(): void {
    this.refesh();
  }



  submit(): void {
    this.createDesig.createDesig(this.desig).subscribe(data =>{this.refesh(),console.log(this.desig)});
  }

 


delete(Id:number){
  this.createDesig.DeleteDesig(Id).subscribe(data => {this.refesh()});
    
}
refesh(){
 
  this.desigList = this.createDesig.getAllDesig();
  
 }

   
 key!:string 
 reverse:boolean=false;
 sort(key:string){
 this.key = key;
 this.reverse=!this.reverse;

}
}
