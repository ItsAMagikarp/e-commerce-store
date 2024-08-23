import { CategoriesService } from './service/categories.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'e-commerce-store';
  searchQuery: string ='';
  categoryList!: any;

  constructor(private CategoriesService: CategoriesService, private router: Router){}
  
  ngOnInit() {
    this.categoryList = this.CategoriesService.getCategories();
  }

  public navigateToCategory(category: any) {
    this.router.navigate(["products"]);
    this.router.navigate(["products", category.toLowerCase()]);
  }
}
