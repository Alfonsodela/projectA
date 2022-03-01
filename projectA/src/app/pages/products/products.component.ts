import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { ProductInterface } from '../../core/services/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: ProductInterface[] = [];
  
  constructor(private ProductsService: ProductsService) { 
    console.log("construido products")
  }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.ProductsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}
