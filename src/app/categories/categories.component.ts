import { CategoriesService } from './../service/categories.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductsComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  @Input() category!: any;

  constructor(
    private route: ActivatedRoute,
    private CategoriesService: CategoriesService
  ) {}

  ngOnInit() {
    const categoryName = String(this.route.snapshot.paramMap.get('categoryName'));
    this.category = categoryName
  }
}

