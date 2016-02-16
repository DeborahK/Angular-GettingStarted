import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {IProduct}       from './product';

@Injectable()
export class ProductService {
    constructor(private _http: Http) { }

    private _productUrl = 'app/products/products.json';

    getProducts() {
        return this._http.get(this._productUrl)
            .map(res => <IProduct[]> res.json())
            .do(data => console.log("All: " + data))
            .catch(this.handleError);
    }

    getProduct(id: number) {
        return this._http.get(this._productUrl)
            .map(res => this.handleMap(res, id))
            .do(data => console.log("One: " + data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private handleMap(res: any, id: number) {
        let data =<IProduct[]> res.json();
        let filtered = data.filter(p => p.productId === id);
        return <IProduct> filtered[0];
    }
}