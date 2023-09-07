import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { ProductInfo } from '../../interfaces';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-products-entry',
  templateUrl: './admin-products-entry.component.html',
  styleUrls: ['./admin-products-entry.component.css']
})
export class AdminProductsEntryComponent implements OnInit {
  productEntryForm!: FormGroup<any>;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private route: Router,
    private activateRoute: ActivatedRoute
  ) {
      const state = history.state;
      this.productEntryForm = this.fb.group({
        id: [state ? state.id : 0],
        name: [state?.name, Validators.required],
        description: [state?.description, Validators.required],
        quantity: [state?.quantity, Validators.required],
        price: [state?.price, Validators.required],
        createdDate: [state ? state.createdDate : new Date()],
        modifiedDate: [state ? state.createdDate : new Date()]
      })  
    }
  ngOnInit(): void {
    console.log(history.state)
  }

  onSubmit() {
    if(this.productEntryForm.valid){
      if(history.state?.id){
        const product = this.productEntryForm.value;
        const data = {
            "id": product.id,
            "name": product.name,
            "description": product.description,
            "quantity": product.quantity,
            "price": product.price,
            "createdDate": product.createdDate,
            "modifiedDate": new Date()
        }
        try{
          this.authService.putProduct(data)
          .subscribe(
            (response) => {
              console.log(response);
              this.route.navigate(['admin/products'])
            }
          )
        }catch(error){
          console.error(error)
        }
      }
      else {
        const product = this.productEntryForm.value;
        const data = {
            "id": 0,
            "name": product.name,
            "description": product.description,
            "quantity": product.quantity,
            "price": product.price,
            "createdDate": new Date(),
            "modifiedDate": new Date()
        }
        try{
          this.authService.postProduct(data)
          .subscribe(
            (response) => {
              console.log(response);
              this.route.navigate(['admin/products'])
            }
          )
        }catch(error){
          console.error(error)
        }
      }
      
    }
  }
}
