import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductInterface } from './models/product.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<ProductInterface[]> {
    return (this.httpClient.get(`${environment.ApiURL}products`) as Observable<
      ProductInterface[]
    >).pipe(
      map((products) => {
        return products.map((product) => ({
          name: product.name,
          image: product.image,
        }));
      })
    );
  }

  public getProductById(id: string): Observable<ProductInterface> {
    return this.httpClient.get(`${environment.ApiURL}products/${id}`
    ) as Observable<ProductInterface>;
  }

  public createProduct(product: ProductInterface): Observable<ProductInterface> {
    return this.httpClient.post(`${environment.ApiURL}products`, product
    ) as Observable<ProductInterface>;
  }

  public deleteProduct(id: string): Observable<ProductInterface> {
    return this.httpClient.delete(`${environment.ApiURL}products/${id}`
    ) as Observable<ProductInterface>;
  }

  public editProduct(id: string, body: ProductInterface) {
    return this.httpClient.put(`${environment.ApiURL}products/${id}`, body) as Observable<ProductInterface>;
  }
}
