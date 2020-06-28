import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.productUrl).pipe( // use rxjs operators
      tap((x) => console.log(`data: ${JSON.stringify(x)}`)),  // no side effects
      catchError(this.handleError) // handle exceptions
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message);  // rethrow the message
  }
}
