import {Component, OnInit } from "@angular/core"
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
    selector:"pm-products",
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


_listFilter:string="cart";

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
 this.products = this.ProductService.getProducts();
 this.filteredProducts = this.products;
  }

  toggleImage():void{
    this.showImage=!this.showImage;
    
  }
}