import { Component } from '@angular/core'
//import { EPROTONOSUPPORT } from 'constants';

@Component( {
    selector: 'pm-products',
    templateUrl: './product-list.component.html'    
})
export class ProductListCcomponent {
    pageTitle: string = 'Product List';
    products: any[] = [
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
        }
    ];
}