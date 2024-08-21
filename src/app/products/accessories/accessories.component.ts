import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsComponent } from '../products.component';


@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class AccessoriesComponent {
  productList:any[]=[];
  productCategory: string = 'accessory';
}
// grab path parameter category/:categoryId/productDetails/:productId to make API call (Hardcoded Data)