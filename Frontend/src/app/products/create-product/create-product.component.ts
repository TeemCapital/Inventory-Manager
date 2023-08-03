import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/Services/http.service';
import { ProductsInterface } from 'src/app/interface/products-interface';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  @ViewChild('productForm', { static: true }) form: NgForm | undefined;

  productCreatedNotification:boolean=false;

  constructor(private http:HttpClient,private httpSer:HttpService){}

  submit(data:any){
  this.http.post<ProductsInterface>(`${this.httpSer.apiUrl}/create`,data).subscribe(
    (res)=>{
      if(res){
        this.productCreatedNotification=true;
        setTimeout(() => {
          this.productCreatedNotification=false;
          this.form?.resetForm();
        }, 2000);
      }
    }
  )
}

}
