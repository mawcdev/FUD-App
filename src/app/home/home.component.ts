import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { Product } from '../../models/product';
import { ResponseDto } from '../../models/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products:Product[] = []
  response?:ResponseDto
  constructor(private prodService:ProductService) {
  }

  ngOnInit(): void {
    this.prodService.getProducts().subscribe(resp => {
      this.response=resp;
      if(resp.isSuccess){
        this.products=resp.result;
      }
    })
  }
}
