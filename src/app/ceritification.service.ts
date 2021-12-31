import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CeritificationService {
  Certi_Url='http://localhost:8080/certification'

  constructor(private http:HttpClient) { }

  getAllCert():Observable<any>{
    return this.http.get(`${this.Certi_Url}/`);
  }
  createCert(data:any):Observable<any>{
    return this.http.post(`${this.Certi_Url}/`, data , { responseType: 'text' });
  }
  getCertById(Id:number):Observable<any>{
    return this.http.get(`${this.Certi_Url}/${Id}`);
  }
  updateCert(Id:number,data:any):Observable<any>{
   return this.http.put(`${this.Certi_Url}/${Id}`,data) ;
  }
  DeleteCert(Id:number):Observable<any>{
    return this.http.delete(`${this.Certi_Url}/${Id}`, { responseType: 'text' });
  }

}