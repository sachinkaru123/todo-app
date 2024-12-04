import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { AddProductResponse } from '../model/add-product-response.model';
import { Observable } from 'rxjs';
import { ProductResponse } from '../model/product-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://host1.open.uom.lk/';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addProduct(product: Product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      '${this.baseUrl}api/product',
      product,
      this.httpOptions
    );
  }

  getProducts() : Observable<ProductResponse>{
    return this.http.get<ProductResponse>('${this.baseUrl}api/product')
  }
}
