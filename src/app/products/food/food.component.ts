import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
    productList:any[]=[];
    productCategory: string = 'food';
  }

