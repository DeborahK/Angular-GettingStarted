import {Component, OnInit } from "@angular/core"
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
    
    templateUrl:"./product-list.component.html",
    styleUrls:["./product-list.component.css"]
})


export class ProductListComponent 
implements OnInit
{
heading:string ="Product List";
imageWidth:number= 50;
imageMargin:number=2;
showImage:boolean=false;
errorMessage:string;


_listFilter:string

get listFilter():string{
  return this._listFilter
}
set listFilter(value:string){
  this._listFilter = value;
  this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products
}
filteredProducts: IProduct[];


products:IProduct[] = [ ];

  constructor(private ProductService: ProductService) {

 
  }

  onRatingClicked(message:string):void{
    this.heading = `Product List ${message}`
  }

  performFilter(filterBy:string):IProduct[] {
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct)=> product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1)
  }

  ngOnInit(): void {
  this.ProductService.getProducts().subscribe({
   next: products => {this.products =products;
    this.filteredProducts = this.products;},
   error: err => this.errorMessage =err,
 });

  }

  toggleImage():void{
    this.showImage=!this.showImage;
    
  }
}