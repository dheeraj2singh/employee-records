import { Observable } from 'rxjs';
import { Designation } from './../designation.model';
import { Router } from '@angular/router';
import { SearchService } from '../../../services/search.service';
import { Employee } from './../employee.model';
import { Component, OnInit } from '@angular/core';
import { Search } from '../search.model';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    
  search:Search = new Search();
  employees:Employee []=[];
  searchterm!:any;
  cpage:number=0;
  currentPage:number=0;
  itemsPerPage:any=4;
  totalItems!:any;
  totalPages!:any;
  key!:string;
 reverse:boolean=false;
 designations!:Observable<Designation[]>;
    constructor(private searchService: SearchService, private router: Router,private empService:EmpService) { }

  ngOnInit(): void {
    this.designations=this.empService.getDesignation();
  }

  searchEmployee(){
    console.log(this.search)
      this.searchService.searchEmployeesList(this.cpage,this.itemsPerPage,this.search).subscribe(data=> {
        this.employees=data["content"],
      this.itemsPerPage=data["size"],
      this.totalPages=data["totalPages"],
      this.totalItems=data["totalElements"],console.log(data)
      }
        );
  }
  submit(){
    this.reloadData();
  }

  handlePageChange(event:any){

    console.log(event);
    this.cpage=event-1;
    console.log(this.cpage);
    this.currentPage=event;
   this.reloadData();
    console.log(this.itemsPerPage)
  }

  reloadData(){
    this.searchEmployee();
  }

  sortData(key:string){
    this.key=key;
    this.reverse=!this.reverse;

  }

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id)
      .subscribe(
        data => {
         
          this.reloadData();
        },
        error => console.log(error));
        
  }

  // function to navigate the router to details page

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }


  // function to navigate the router to update component
  updateEmployee(id:number){
    this.router.navigate(['update',id]);
  }

  itemPerPage(){
    if(this.employees.length>0){
      this.reloadData();
  }
}
clear(){
  this.employees=[];
  this.search=new Search();
  this.ngOnInit();
}
}