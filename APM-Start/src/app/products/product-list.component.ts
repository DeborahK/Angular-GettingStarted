import { Component,OnInit } from "@angular/core";
import { IProduct } from "src/app/products/product";
//import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
selector:'pm-products',
templateUrl: './product-list.component.html',
styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle:string='Products List Grid Data';
    imageWidth:number=50;
    imageMargin: number=2;
    showImage:boolean=false;
    buttonText:string='Show Image';
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
    products:IProduct[]=
    [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2016",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2016",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2016",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2016",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }
      ];

      toggleImage():void {
        if(this.showImage)
        this.buttonText ='Show Image';        
        else
        this.buttonText= 'Hide image';

        this.showImage=!this.showImage;
      }
      ngOnInit(): void{
        console.log('Ng onInit got triggered');
      }
      performFilter(filterBy:string):IProduct[]{
        filterBy=filterBy.toLowerCase();
        return this.products.filter((product:IProduct)=>
      product.productName.toLowerCase().indexOf(filterBy)!==-1);
      }

      constructor()
      {
       
        this.filteredProducts=this.products;
        this.listFilter='cart';
      }
}