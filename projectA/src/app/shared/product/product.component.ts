import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInterface } from 'src/app/core/services/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() public product?: ProductInterface;
  @Input() public enableProductEdit: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public editProduct() {
    this.router.navigate(['/edit-form', this.product?.id]);
  }

}
