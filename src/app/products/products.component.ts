import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {
  @Input() categoryName!: string;
  productList!: any;

  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('categoryName') || '';
      this.productList = this.productService.getProductsByCategory(this.categoryName);
    });
  }

  public navigateToProduct(product: any) {
    this.router.navigate(["products", this.categoryName.toLowerCase(), "product-details", product.productId]);
  }
}
