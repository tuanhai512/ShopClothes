import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

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

   addCategory(emp : Product){
     return this.http.post<Product>(this.addEmpUrl,emp).pipe(map((res:any)=>{
      return res;
     }));
   }

     getAllCategory(){
      return this.http.get<Product>(this.getEmpUrl).pipe(map((res:any)=>{
        return res;
       }));}
       updateCategory(emp: Product){
        return this.http.put<Product>(this.getEmpUrl, emp).pipe(map((res:any)=>{
          return res;
         }));}
    deleteCategory(emp: Product){
      return this.http.delete<Product>(this.deleteEmpUrl+'/'+emp.ID);
    }
}
