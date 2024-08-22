import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public categoryList = [
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
    getCategories() {
      return this.categoryList;
  }
}