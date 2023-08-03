import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { ProductsInterface } from 'src/app/interface/products-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  products:any;
  constructor(private httpSer:HttpService,private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<ProductsInterface>(`${this.httpSer.apiUrl}/show`).subscribe(
      (res)=>{
        this.products=res
        console.log(this.products)
      }
    )
  }


}
