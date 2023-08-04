import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpService } from 'src/app/Services/http.service';
import { ProductsInterface } from 'src/app/interface/products-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  products:any[]=[];
  productId:any;
  loadingData:boolean=false;
  searchedItem:string='';
  quantity!:number;
  productDeletedNotification:boolean=false;
  constructor(private httpSer:HttpService,private http:HttpClient){}
  ngOnInit(): void {
    this.loadingData=true;
    this.http.get<any>(`${this.httpSer.apiUrl}/show`).pipe(
      finalize(()=>{
        this.loadingData=false;
      })
    ).subscribe(
      (res)=>{
        this.products=res[0]
        console.log(this.products)
      }
    )
  }

  get filteredItems(){
    return this.products.filter(item=>item.name.toLowerCase().includes(this.searchedItem.toLowerCase()))
  }

  getId(id:any){
    this.productId=id;
    console.log(this.productId)
  }

  itemSold(data:any){
    this.http.post<any>(`${this.httpSer.apiUrl}/${this.productId}/itemSold`,data).subscribe(
      (res)=>{
        console.log(res)
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    )
  }
  delete(){
    this.http.delete(`${this.httpSer.apiUrl}/${this.productId}/delete`).subscribe(
      (res)=>{
        console.log(res)
        if(res){
          this.productDeletedNotification=true
          setTimeout(() => {
            this.productDeletedNotification=false;
            setTimeout(() => {
              window.location.reload()
            }, 1000);
          }, 2000);
        }
      }
    )
  }

}
