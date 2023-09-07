import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  loginForm!: FormGroup<any>;
  isValid!: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm?.valid) {
      try {
        this.authService
          .adminLoginSubmitClick(this.loginForm.value.email, this.loginForm.value.password)
          .subscribe(
            (response) => {
              console.log(response);
              this.router.navigate(['/admin/products']);
              return response;
            },
            (error) => {
              console.error('Error:', error);
              this.isValid = false;
            }
          );
      } catch (error) {
        console.error('Error ' + error);
      }
    }
  }
}
