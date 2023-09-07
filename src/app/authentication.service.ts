import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable, tap } from 'rxjs';
import { ProductInfo } from './interfaces';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private readonly APIURL = "https://localhost:7114/api/";

  constructor(
    private http: HttpClient,
  ) { }

  //adminLogin
  adminLoginSubmitClick (email: string, password: string) {
    const url = `${this.APIURL}AdminDetails/GetAdminInfo?email=${email}&password=${password}`;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set appropriate content type
      'Access-Control-Allow-Origin': '*' // Replace with your Angular app's URL
    });

   return this.http.get(url, {headers});
  }

  //get all Products
  getProducts () {
    const url = `${this.APIURL}AdminDetails/Products`;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set appropriate content type
      'Access-Control-Allow-Origin': '*' // Replace with your Angular app's URL
    });

    return this.http.get(url, {headers});
  }

  //post products
  postProduct (productsInfo : ProductInfo) {
    const url = `${this.APIURL}AdminDetails/ProductsEntry`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set appropriate content type
      'Access-Control-Allow-Origin': '*' // Replace with your Angular app's URL
    });
    return this.http.post(url, productsInfo, {headers});
    
  }

  //update Product
  putProduct (productsInfo : ProductInfo) {
    const url = `${this.APIURL}AdminDetails/ProductsEntry/${productsInfo.id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set appropriate content type
      'Access-Control-Allow-Origin': '*' // Replace with your Angular app's URL
    });
    return this.http.put(url, productsInfo, {headers});
    
  }

  //deleteProduct
  deleteProduct (productsInfo : ProductInfo) {
    const url = `${this.APIURL}AdminDetails/ProductsEntry/${productsInfo.id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set appropriate content type
      'Access-Control-Allow-Origin': '*' // Replace with your Angular app's URL
    });
    return this.http.delete(url, {headers});
    
  }
}
