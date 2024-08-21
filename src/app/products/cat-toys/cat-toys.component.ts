import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-cat-toys',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './cat-toys.component.html',
  styleUrl: './cat-toys.component.css'
})
export class CatToysComponent {
  productList:any[]=[];
  productCategory: string = 'cat toy';
}

