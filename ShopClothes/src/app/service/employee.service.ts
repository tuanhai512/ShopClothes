import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Employee } from '../model/employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpUrl: string;
  getEmpUrl: string;

  constructor(private http :HttpClient) {
    this.addEmpUrl = 'https://localhost:44377/api/Categories';
    this.getEmpUrl = 'https://localhost:44377/api/Categories';
   }

   addEmployee(emp : any){
     return this.http.post<any>(this.addEmpUrl,emp).pipe(map((res:any)=>{
      return res;
     }));
   }

     getAllEmployee(){
      return this.http.get<{name: Employee, id: Employee}>(this.getEmpUrl).pipe(map((res:any)=>{
        return res;
       }));}
}
