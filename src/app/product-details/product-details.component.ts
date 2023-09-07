import { Component, Input, OnInit } from '@angular/core';
import { Product, products } from '../json-data/products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ){}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute)
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('your product has been added to the cart')
  }
  
}
