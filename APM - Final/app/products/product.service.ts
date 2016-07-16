import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl:string;
    private _products$: Subject<IProduct[]>; 
    private productsStore: { products: IProduct[] }; 
    
    constructor(private _http: Http) { 
        this._productUrl = 'api/products/products.json';
        this.productsStore = { products: [] };
        this._products$ = <Subject<IProduct[]>>new Subject();
    }

    get products$() {
        return this._products$.asObservable();
     }

    getProducts() {
        this._http.get(this._productUrl).map(response => response.json()).subscribe(data => {
          this.productsStore.products = data;
          this._products$.next(this.productsStore.products);
         }, 
            error => console.log('Could not load products.'));
    }
}

