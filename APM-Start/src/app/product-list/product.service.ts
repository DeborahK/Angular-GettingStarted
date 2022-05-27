import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Product } from "./product";

 

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    private productUrl: string = "../../api/products/products.json";

    constructor(private http: HttpClient){}

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.productUrl)
        .pipe(
          tap(data => console.log('Data: ', JSON.stringify(data))),
          catchError(this.handleError)
          );
    }

    private handleError(e: HttpErrorResponse){
      if (e.error instanceof ErrorEvent) {
        console.log(`Error: ${e.error.message}`)
        return throwError(`Error: ${e.error.message}`)
      }

      else{
        console.log(`server returned code ${e.status}, error: ${e.message}`);
        return throwError(`server returned code ${e.status}, error: ${e.message}`);
      }
    }
}