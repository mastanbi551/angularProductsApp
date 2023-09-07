import { Component, OnInit } from '@angular/core';
import { products } from '../json-data/products';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: any = [];
  responsiveOptions: any[] | undefined;
  constructor(
    private authService: AuthenticationService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
    ]
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

  getSeverity(quantity: number): string {
    if(quantity > 0) {
      return 'In Stock'
    }
    else if(quantity == 0){
      return 'Out Of Stock'
    }
    else {
      return 'In Transit'
    }

}
  
  share() {
    window.alert('The product has been shared')
  }

  onNotify() {
    window.alert('you will be notified when the product goes on sale')
  }
}
