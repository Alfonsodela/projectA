import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { ProductInterface } from 'src/app/core/services/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public products?: ProductInterface;

  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params["id"];
      this.ProductsService.getProductById(productId).subscribe((product) => {
        this.products = product;
        // console.log(this.products)
      });
    });
  }
}
