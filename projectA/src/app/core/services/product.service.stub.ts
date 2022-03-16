import { Observable, of } from 'rxjs';
import { ProductInterface } from './models/product.model';
import { productMock } from './product.mocks';


export class ProductsServiceStub {

    constructor() {}
  
    public getProducts(): Observable<ProductInterface[]> {
      return of([productMock]);
      

    }
    
  
  
  
  }
  