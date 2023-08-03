import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {path:'',component:ProductComponent},
  {path:'create',component:CreateProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
