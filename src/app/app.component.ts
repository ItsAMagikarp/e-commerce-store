import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CatsComponent } from './products/cats/cats.component';

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
  categoryList: any
  constructor(){
  }
  
  ngOnInit() {
    this.categoryList =[
      {
        categoryName: "cats",
        categoryId: 1,
      },
      {
        categoryName: "food",
        categoryId: 2,
      },
      {
        categoryName: "accessory",
        categoryId: 3,
      },
      {
        categoryName: "cat toys",
        categoryId: 4,
      },
    ]
  }
}

