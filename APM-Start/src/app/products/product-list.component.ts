import { Component,OnInit } from "@angular/core";
import { IProduct } from "src/app/products/product";
import { ProductService } from "src/app/products/product.service";
import { error } from "@angular/compiler/src/util";
//import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({

templateUrl: './product-list.component.html',
styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle:string='Products List Grid Data';
    imageWidth:number=50;
    imageMargin: number=2;
    showImage:boolean=false;
    buttonText:string='Show Image';
    errorMessage:string;
    // listFilter:string='Cart';
    _listFilter:string;

    get listFilter():string{
      return this._listFilter;
    }
    set listFilter(value:string){
      this._listFilter=value;
      this.filteredProducts=this.listFilter? this.performFilter(this.listFilter): this.products;
    }

    filteredProducts:IProduct[];
    products:any;

      toggleImage():void {
        if(this.showImage)
        this.buttonText ='Show Image';        
        else
        this.buttonText= 'Hide image';

        this.showImage=!this.showImage;
      }
      ngOnInit(): void{
        console.log('Ng onInit got triggered');

        this.products=this.productService.getProducts().subscribe(
          products=> {
            this.products= products;
            this.filteredProducts=this.products;
          },
          error => this.errorMessage=<any> error
        );

        
      }
      performFilter(filterBy:string):IProduct[]{
        filterBy=filterBy.toLowerCase();
        return this.products.filter((product:IProduct)=>
      product.productName.toLowerCase().indexOf(filterBy)!==-1);
      }

      constructor(private productService:ProductService)
      {
       
        
        //this.listFilter='cart';
      }

      onRatingClicked(param:string):void{
        console.log(`THe rating from nested component to parent component ${param} !`);

        this.pageTitle=param;
      }
}