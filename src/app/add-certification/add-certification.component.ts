import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Certification } from './../certification.model';
import { Component, OnInit } from '@angular/core';
import { CeritificationService } from '../ceritification.service';

@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.css']
})
export class AddCertificationComponent implements OnInit {
  cert: Certification  =new Certification();
 
certifications!:Observable<Certification>;

constructor(private certificationservice:CeritificationService,
  private route:Router) { }

ngOnInit(): void {
  this.getCert();
}

getCert(){

  this.certifications=this.certificationservice.getAllCert();

}

key:any
reverse:boolean=false
sort(key:any){
  this.key=key;
  this.reverse!=this.reverse;
}

delete(Id:number){
  this.certificationservice.DeleteCert(Id).subscribe(data => this.getCert());

}
submit(){
  this.certificationservice.createCert(this.cert).subscribe(data=> {this.getCert(),console.log(data)})
}


}


