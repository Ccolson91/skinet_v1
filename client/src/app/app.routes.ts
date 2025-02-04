import { Routes } from '@angular/router';
import { ShopComponent } from './features/shop/shop.component';
import { ProductDetailsComponent } from './features/home/shop/product-details/product-details.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'shop/:id', component: ProductDetailsComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
