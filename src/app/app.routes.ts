import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
    {
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'products' , 
        component: ProductsComponent
    },
    {
         path: 'products/:categoryName' , 
        component: CategoriesComponent
    },
    {
        path: 'about', 
        component: AboutComponent
    },
    {
        path: 'contact', 
        component: ContactComponent
    },
    {
        path: 'products/:categoryName/product-details/:productId' , 
        component: ProductDetailsComponent
    },
];
