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
  updateEmpUrl: string;
  deleteEmpUrl:string;

  constructor(private http :HttpClient) {
    this.addEmpUrl = 'https://localhost:44377/api/Categories';
    this.getEmpUrl = 'https://localhost:44377/api/Categories';
    this.updateEmpUrl = 'https://localhost:44377/api/Categories';
    this.deleteEmpUrl = 'https://localhost:44377/api/Categories';
   }

   addEmployee(emp : Employee){
     return this.http.post<Employee>(this.addEmpUrl,emp).pipe(map((res:any)=>{
      return res;
     }));
   }

     getAllEmployee(){
      return this.http.get<Employee>(this.getEmpUrl).pipe(map((res:any)=>{
        return res;
       }));}
       updateEmployee(emp: Employee){
        return this.http.put<Employee>(this.getEmpUrl, emp).pipe(map((res:any)=>{
          return res;
         }));}
    deleteEmployee(emp: Employee){
      return this.http.delete<Employee>(this.deleteEmpUrl+'/'+emp.ID);
    }
}
