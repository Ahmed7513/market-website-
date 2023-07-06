import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  {path:"",component:AllProductsComponent},
{path:"products" , component:AllProductsComponent},
{path:"Details", component:ProductsDetailsComponent},
{path:"cart",component:CartComponent},

{path:"**", redirectTo:"products",pathMatch:"full"}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
