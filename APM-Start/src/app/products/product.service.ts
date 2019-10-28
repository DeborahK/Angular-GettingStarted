import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProduct } from './product';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn : 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor( private http : HttpClient) {}
  getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError),
        );
    }
  private handleError(err : HttpErrorResponse){
    console.log(err.error);
    return throwError("Method not implemented.");
  }
}