/* import { CategoriesService } from './../service/categories.service';
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
    console.log('Category Name:', categoryName); 
    const categoryDetails = this.CategoriesService.categoryList.find(c => c.categoryName === categoryName); 
    this.category = categoryName
  }
} */

  import { CategoriesService } from './../service/categories.service';
  import { CommonModule } from '@angular/common';
  import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
  import { ActivatedRoute, RouterModule} from '@angular/router';
  import { ProductsComponent } from '../products/products.component';
  
  @Component({
    selector: 'app-categories',
    standalone: true,
    imports: [CommonModule, RouterModule, ProductsComponent],
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.css'
  })
  export class CategoriesComponent implements OnInit, OnChanges {
    @Input() category!: any;
  
    constructor(
      private route: ActivatedRoute,
      private CategoriesService: CategoriesService
    ) {}
  
    ngOnInit() {
      this.updateCategory();
      this.route.paramMap.subscribe(() => this.updateCategory()); // Listen for changes
    }
  
    ngOnChanges(changes: SimpleChanges) {
      if (changes['category']) {
        this.updateCategory();
      }
    }
  
    private updateCategory() {
      const categoryName = String(this.route.snapshot.paramMap.get('categoryName'));
      console.log('Category Name:', categoryName); 
      const categoryDetails = this.CategoriesService.categoryList.find(c => c.categoryName === categoryName); 
      this.category = categoryDetails?.categoryName;
    }
  }