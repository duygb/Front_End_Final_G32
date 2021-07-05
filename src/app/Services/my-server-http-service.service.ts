import { Age } from './../product-sale/sidebar/common/age';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private REST_API_SERVER = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}
  public getAll(serverPath: string): Observable<Object> {
    const url = `${this.REST_API_SERVER}/${serverPath}`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getById(serverPath: string, id: string): Observable<any> {
    const url = `${this.REST_API_SERVER}/${serverPath}?id=${id}`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getCouponByCode(code: string): Observable<any> {
    const url = `${this.REST_API_SERVER}/coupon?code=${code}`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getByIds(serverPath: string, ids: string[]): Observable<any> {
    let url = `${this.REST_API_SERVER}/${serverPath}?`;
    ids.forEach((id) => {
      url = url + `id=${id}&`;
    });
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public checkUsername(username: string): Observable<any> {
    const url = `${this.REST_API_SERVER}/users?username=${username}`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public checkUserInfo(username: string, password: string): Observable<any> {
    const url = `${this.REST_API_SERVER}/users?username=${username}&password=${password}`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getSaleProductsList(
    indexPage: number,
    limit: number
  ): Observable<any> {
    const url = `${this.REST_API_SERVER}/saleProducts?_page=${indexPage}&_limit=${limit}`;
    console.log(this.httpOptions);
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getItem(serverPath: string, paramArray: Map<Object, Object>) {
    let url = `${this.REST_API_SERVER}/${serverPath}?`;
    paramArray.forEach((value, key) => {
      if (key === 'id') {
        url = url + `id=${value}&`;
      } else if (key === 'page') {
        url = url + `_page=${value}&`;
      } else if (key === 'limit') {
        url = url + `_limit=${value}&`;
      } else if (key === 'sort' && value != '') {
        url = url + `_sort=${value}&`;
      } else if (key === 'order' && value != '') {
        url = url + `_order=${value}&`;
      } else if (key === 'checkAgeValue') {
        let valueArray = value as Age[];
        if (valueArray.length != 0) {
          valueArray.forEach((element) => {
            let stringValue = element.value;
            url = url + `age.value_like=${stringValue}&`;
          });
        }
      } else if (key === 'checkSex') {
        url = url + `sex_like=${value}&`;
      } else if (key === 'checkBrand') {
        url = url + `brand_like=${value}&`;
      } else if (key === 'search') {
        url = url + `name_like=${value}&`;
      }
    });
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getAllSaleProducts(): Observable<any> {
    const url = `${this.REST_API_SERVER}/saleProducts`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getCart(): Observable<any> {
    const url = `${this.REST_API_SERVER}/cart`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public addToCart(item: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/cart`;
    return this.httpClient
      .put(url, item, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getPageItems(page: number, limit: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/saleProducts?_page=${page}&_limit=${limit}`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getAllBrands(): Observable<any> {
    const url = `${this.REST_API_SERVER}/brands`;
    return this.httpClient
      .get(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
