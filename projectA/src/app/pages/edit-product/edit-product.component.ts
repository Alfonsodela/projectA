import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/services/models/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {


  public product?: ProductInterface;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params["id"];
      this.productsService.getProductById(productId).subscribe((product) => {
        this.product = product;
        console.log(product)
      });
    });
  }


}
