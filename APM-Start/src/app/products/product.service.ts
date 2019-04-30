import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})

export class ProductsService{

    getProducts(): IProduct[] {
        return [
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "price": 32.99,
                "description": "15 gallon capacity rolling garden cart",
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
            },
            {
                "productId": 10,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Nintendo-Switch-Pro-Controller-FL.jpg"
            }
        ];   
    }
}