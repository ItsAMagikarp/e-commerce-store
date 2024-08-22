import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';

export interface Product {
  productName: string;
  productCategory: string;
  productId: number;
  productDesc: string;
  price: number;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit{
  productDetails!: any;

  constructor(
    private route: ActivatedRoute,
    private productSerivce: ProductService
  ) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    const product = this.productSerivce.productList.find(p => p.productId === productId);
    this.productDetails = product;
    if (product) {
      this.productDetails = product;
    } else {
      console.error('Product not found');
    }
  }
}

