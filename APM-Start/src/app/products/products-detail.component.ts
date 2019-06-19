import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/products/product';
import { Router } from '@angular/router';

@Component({
  
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  pageTitle:string='Product Details';
  product:IProduct;
  constructor(private route: ActivatedRoute,
  private router:Router) { 
    
  }

  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get('id');
    this.pageTitle +=`  : ${id}`;
    this.product = {
      "productId":id,
      "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  
    }
  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}
