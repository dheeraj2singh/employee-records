
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from 'src/app/search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  testUrl:string="http://localhost:8080/employee";
  constructor(private http : HttpClient) { }

  searchEmployeesList(page:number,itemsPerPage:number,data:Search): Observable<any> {
    // return this.http.get(`${this.baseUrl}/`);
    return this.http.get(`${this.testUrl}/list/`+page+'/items/'+itemsPerPage);
  }

  

}


