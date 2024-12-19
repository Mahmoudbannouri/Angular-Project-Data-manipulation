import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {product} from "../core/models/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  getProduct(){
    return this.http.get<product[]>('http://localhost:3000/product');
  }

  postProduct(p:product){
    return this.http.post('http://localhost:3000/product', p);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }


  updateProduct(product: product) {
    return this.http.put<product>(`http://localhost:3000/product/${product.id}`, product);

  }

  getProductById(id: string): Observable<product> {
    return this.http.get<product>(`http://localhost:3000/product/${id}`);
  }





}
