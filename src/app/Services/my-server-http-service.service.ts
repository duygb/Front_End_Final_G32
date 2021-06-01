import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServerHttpService {
  private httpOptions = {
    headers:  new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  private REST_API_SERVER = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}
  public getProducts(): Observable<any>{
    const url = `${this.REST_API_SERVER}/products`;
    return this.httpClient.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }
  public getSaleProductList(): Observable<any>{
    const url = `${this.REST_API_SERVER}/saleProducts`;
    return this.httpClient.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }
  public getCart(): Observable<any>{
    const url = `${this.REST_API_SERVER}/cart`;
    return this.httpClient.get(url, this.httpOptions).pipe(catchError(this.handleError));
  }
  public addToCart(item: any): Observable<any>{
    const url = `${this.REST_API_SERVER}/cart`;
    return this.httpClient.put(url,item,this.httpOptions).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
