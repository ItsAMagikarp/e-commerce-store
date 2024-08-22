import { CategoriesService } from './../service/categories.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductsComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  category!: any;


  constructor(
    private route: ActivatedRoute,
    private CategoriesService: CategoriesService
  ) {}

  ngOnInit() {
    const categoryName = String(this.route.snapshot.paramMap.get('categoryName'));
    const category = this.CategoriesService.categoryList.find(c => c.categoryName === this.category);
  }
}
