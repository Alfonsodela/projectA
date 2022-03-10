import { ProductInterface } from 'src/app/core/services/models/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: ProductInterface[], filterValue: string): ProductInterface[] {
    return products.filter(value => value.name.toLowerCase().includes(filterValue.toLocaleLowerCase()));
 }
}
