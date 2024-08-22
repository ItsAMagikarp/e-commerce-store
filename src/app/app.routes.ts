import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CatsComponent } from './products/cats/cats.component';
import { FoodComponent } from './products/food/food.component';
import { AccessoriesComponent } from './products/accessories/accessories.component';
import { CatToysComponent } from './products/cat-toys/cat-toys.component';
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
    /* {
        path: 'cats', 
        component: CatsComponent
    },
    {
        path: 'food', 
        component: FoodComponent
    },
    {
        path: 'accessory', 
        component: AccessoriesComponent
    },
    {
        path: 'cat toys', 
        component: CatToysComponent
    }, */
];
