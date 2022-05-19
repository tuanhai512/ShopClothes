import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  addEmpUrl: string;
  getEmpUrl: string;
  updateEmpUrl: string;
  deleteEmpUrl: string;

  constructor(private http: HttpClient) {
    this.addEmpUrl = 'https://localhost:44377/api/Products';
    this.getEmpUrl = 'https://localhost:44377/api/Products';
    this.updateEmpUrl = 'https://localhost:44377/api/Products';
    this.deleteEmpUrl = 'https://localhost:44377/api/Products';
  }

  addProduct(emp: Product) {
    return this.http.post<Product>(this.addEmpUrl, emp).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAllProduct() {
    return this.http.get<Product>(this.getEmpUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateProduct(emp: Product) {
    return this.http.put<Product>(this.getEmpUrl, emp).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteProduct(emp: Product) {
    return this.http.delete<Product>(this.deleteEmpUrl + '/' + emp.ID);
  }
  find(emp: Product){
    return this.http.get<Product>(this.getEmpUrl+'/'+emp.ID).pipe(
    )
  }
}
