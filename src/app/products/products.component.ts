import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  productList: any

  constructor(){

  }

  ngOnInit(){
    //make API call to get products list
    this.productList = [
      {
        productName: "cat 1",
        productId: 1,
        productDesc: "test",
        price: 5.99
      }
    ]
    
  }
};
