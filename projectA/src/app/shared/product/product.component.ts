import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/services/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() public product?: ProductInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
