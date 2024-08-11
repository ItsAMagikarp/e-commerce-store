import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CatsComponent } from './products/cats/cats.component';
import { FoodComponent } from './products/food/food.component';
import { AccessoriesComponent } from './products/accessories/accessories.component';
import { CatToysComponent } from './products/cat-toys/cat-toys.component';
import { BombayCatComponent } from './products/cats/bombay-cat/bombay-cat.component';

export const routes: Routes = [
    {
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'products', 
        component: ProductsComponent
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
        path: 'cats', 
        component: CatsComponent
    },
    {
        path: 'food', 
        component: FoodComponent
    },
    {
        path: 'accessories', 
        component: AccessoriesComponent
    },
    {
        path: 'cat-toys', 
        component: CatToysComponent
    },
    {
        path: 'bombay-cat',
        component: BombayCatComponent
    }
];
