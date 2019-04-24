import { Component } from '@angular/core'
//import { EPROTONOSUPPORT } from 'constants';

@Component( {
    selector: 'pm-products',
    templateUrl: './product-list.component.html'    
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart'
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://www.cartsvermont.com/wp-content/uploads/carts-vermont-mid-01.jpg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/84/Claw-hammer.jpg"
        }
    ];

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

}