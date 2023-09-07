import { Component, OnInit, inject } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { ProductInfo } from '../../interfaces';
import {ConfirmationService, MessageService, ConfirmEventType} from 'primeng/api';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.css'],
})
export class AdminProductsListComponent implements OnInit{
  products: any = [];

  /**
   *
   */
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
        
  }
  ngOnInit(): void {
    try{
      this.authService.getProducts()
      .subscribe(
        (response) => {
          console.log(response)
          this.products = response
        }
      )
    } catch(error){
        console.error(error)
    }
  }

  addProduct() {
    this.router.navigate(['/productsEntry'])
  }

  redirect(product: ProductInfo){
    this.router.navigate(['/productsEntry'], {state: product})
  }

  delete(product: ProductInfo){
    console.log(product);
    try{
      this.authService.deleteProduct(product)
      .subscribe(
        (response) => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted Successfully' });
          this.confirmationService.close();
          location.reload()
        }
      )
    } catch(error){
        console.error(error)
    }
    
  }

  
  onDelete(product: ProductInfo) : void {
    console.log(product);
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete',
      accept: () => {
        this.delete(product);
      },
      reject: () => {
        this.confirmationService.close();
      }
    })
  }
}
