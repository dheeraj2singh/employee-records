import { EmpService } from './../emp.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';


// this is a details component class
@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {

 // field to reciecve the id to display as details
  id!: number;

  // model object 
  employee!: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmpService) { }


    // inint function  which initilize as details components  called
  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

   // function  which navigate to the lis page

  list(){
    this.router.navigate(['list-employees']);
  }

}
