import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductComponent } from './product/product.component';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    CreateProductComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
