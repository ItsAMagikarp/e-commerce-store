import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css'
})

export class CatsComponent {
  productList:any[]=[];
  productCategory: string = 'cats';
}
