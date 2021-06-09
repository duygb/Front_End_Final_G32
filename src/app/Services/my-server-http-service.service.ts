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
  public getAll(serverPath: string): Observable<Object>{
    const url = `${this.REST_API_SERVER}/${serverPath}`;
    return this.httpClient.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }
  public getSaleProductsList(indexPage: number, limit: number): Observable<any>{
    const url = `${this.REST_API_SERVER}/saleProducts?_page=${indexPage}&_limit=${limit}`;
    console.log(this.httpOptions);
    return this.httpClient.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }
  public getItem(serverPath: string, paramArray: Map<Object,Object>){
    let  url = `${this.REST_API_SERVER}/${serverPath}?` ;
    paramArray.forEach((value, key) => {
      if(key === "id"){
        url = url + `id=${value}&`;
      }else if(key === "page"){
        url = url + `_page=${value}&`;
      }else if(key === "limit"){
        url = url + `_limit=${value}&`;
      }else if(key === "sort"){
        url = url + `_sort=${value}&`;
      } else if(key === "order"){
        url = url + `_order=${value}&`;
      }
    });
    return this.httpClient.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }
  public getProducts(): Observable<any>{
    const url = `${this.REST_API_SERVER}/products`;
    return this.httpClient.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }
  public getAllSaleProducts(): Observable<any>{
    const url = `${this.REST_API_SERVER}/saleProducts`;
    return this.httpClient.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }
  public getBrands(): Observable<any>{
    const url = `${this.REST_API_SERVER}/brands`;
    return this.httpClient.get(url, this.httpOptions).pipe(catchError(this.handleError));
  }
  public getAges(): Observable<any>{
    const url = `${this.REST_API_SERVER}/ages`;
    return this.httpClient.get(url, this.httpOptions).pipe(catchError(this.handleError));
  }
  public getCart(): Observable<any>{
    const url = `${this.REST_API_SERVER}/cart`;
    return this.httpClient.get(url, this.httpOptions).pipe(catchError(this.handleError));
  }
  public addToCart(item: any): Observable<any>{
    const url = `${this.REST_API_SERVER}/cart`;
    return this.httpClient.put(url,item,this.httpOptions).pipe(catchError(this.handleError));
  }
  public getPageItems(page:number,limit:number): Observable<any>{
    const url = `${this.REST_API_SERVER}/saleProducts?_page=${page}&_limit=${limit}`;
    return this.httpClient.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }
  public setPriceToBuy(data: any){
    const url = `${this.REST_API_SERVER}/saleProducts`;
    this.httpClient.put(url,data,this.httpOptions).pipe(catchError(this.handleError));
  }
  public getProductsSortBy(sortBy: string, orderBy: string,page:number,limit:number): Observable<any>{
    const url = `${this.REST_API_SERVER}/saleProducts?_sort=${sortBy}&_order=${orderBy}&_page=${page}&_limit=${limit}`;
    return this.httpClient.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }
  public getAllBrands(): Observable<any>{
    const url = `${this.REST_API_SERVER}/brands`;
    return this.httpClient.get(url,this.httpOptions).pipe(catchError(this.handleError));
  }
  public getAllAges(): Observable<any>{
    const url = `${this.REST_API_SERVER}/ages`;
    return this.httpClient.get(url,this.httpOptions).pipe(catchError(this.handleError));
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
