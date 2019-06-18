import { Injectable } from "@angular/core";
import { IProduct } from "src/app/products/product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {tap,catchError} from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs/internal/observable/throwError";


@Injectable({
    providedIn:'root'
})
export class ProductService{

    private productUrl= 'api/products/products.json';
    constructor(private http: HttpClient){
    
    }
    getProducts():Observable<IProduct[]>{
        return this.http.get<any[]>(this.productUrl).pipe(
            tap(data=>console.log('All: '+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    private handleError(err: HttpErrorResponse){

        let errorMessage='';
        if(err.error instanceof ErrorEvent){
            errorMessage=`An error message occured: ${err.error.message}`;
        }else{
            errorMessage=`Server returned Code:  ${err.status}, error message is: ${err.message}`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}