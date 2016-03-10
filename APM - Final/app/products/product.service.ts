import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {IProduct}       from './product';

@Injectable()
export class ProductService {
    constructor(private _http: Http) { }

    private _productUrl = 'api/products/products.json';

    getProducts() {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log("All: " + data))
            .catch(this.handleError);
    }

    getProduct(id: number) {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));       
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}