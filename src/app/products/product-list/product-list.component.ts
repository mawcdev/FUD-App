import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products:Product[] = []
  
  /**
   *
   */
  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(response => {
        if(response.isSuccess){
          this.products = response.result;
        }
      })
  }

}
