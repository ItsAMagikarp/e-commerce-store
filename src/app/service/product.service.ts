import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    public productList = [
      {
        productName: "Bombay Cat",
        //productImg: ,
        productCategory: "cats",
        productId: 1,
        productDesc: "Short Description of Cat",
        price: 50.00
      },
      {
        productName: "Japanese Bobtail Cat",
        //productImg: ,
        productCategory: "cats",
        productId: 2,
        productDesc: "Short Description of Cat",
        price: 50.00
      },
      {
        productName: "Toyger Cat",
        //productImg: ,
        productCategory: "cats",
        productId: 3,
        productDesc: "Short Description of Cat",
        price: 50.00
      },
      {
        productName: "Cat placeholder",
        //productImg: ,
        productCategory: "cats",
        productId: 4,
        productDesc: "Short Description of Cat",
        price: 50.00
      },
      {
        productName: "Food Placeholder",
        //productImg: ,
        productCategory: "food",
        productId: 5,
        productDesc: "Short Description of Cat Food",
        price: 35.99
      },
      {
        productName: "Food Placeholder",
        //productImg: ,
        productCategory: "food",
        productId: 6,
        productDesc: "Short Description of Cat Food",
        price: 35.99
      },
      {
        productName: "Treat Placeholder",
        //productImg: ,
        productCategory: "food",
        productId: 7,
        productDesc: "Short Description of Cat Treat",
        price: 14.99
      },
      {
        productName: "Treat Placeholder",
        //productImg: ,
        productCategory: "food",
        productId: 8,
        productDesc: "Short Description of Cat Treat",
        price: 14.99
      },
      {
        productName: "Accessories Placeholder",
        //productImg: ,
        productCategory: "accessory",
        productId: 9,
        productDesc: "Short Description of Cat accessory",
        price: 14.99
      },
      {
        productName: "Accessories Placeholder",
        //productImg: ,
        productCategory: "accessory",
        productId: 10,
        productDesc: "Short Description of Cat accessory",
        price: 14.99
      },
      {
        productName: "Accessories Placeholder",
        //productImg: ,
        productCategory: "accessory",
        productId: 11,
        productDesc: "Short Description of Cat accessory",
        price: 14.99
      },
      {
        productName: "Accessories Placeholder",
        //productImg: ,
        productCategory: "accessory",
        productId: 12,
        productDesc: "Short Description of Cat accessory",
        price: 14.99
      },
      {
        productName: "Cat Toy Placeholder",
        //productImg: ,
        productCategory: "accessory",
        productId: 13,
        productDesc: "Short Description of Cat accessory",
        price: 14.99
      },
      {
        productName: "Cat Toy Placeholder",
        //productImg: ,
        productCategory: "accessory",
        productId: 14,
        productDesc: "Short Description of Cat accessory",
        price: 14.99
      },
      {
        productName: "Cat Toy Placeholder",
        //productImg: ,
        productCategory: "accessory",
        productId: 15,
        productDesc: "Short Description of Cat accessory",
        price: 14.99
      },
      {
        productName: "Cat Toy Placeholder",
        //productImg: ,
        productCategory: "accessory",
        productId: 16,
        productDesc: "Short Description of Cat accessory",
        price: 14.99
      }
    ]
    getProductById(id: number): Observable<any> {
      const productDetails = this.productList.find(p => p.productId === id);
      return of(productDetails);
    }
  
    getProductsByCategory(category: string): Observable<any[]> {
      const products = this.productList.filter(p => p.productCategory === category);
      return of(products);
  }
}
