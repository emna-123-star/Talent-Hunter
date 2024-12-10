import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side-register',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-register.component.html',
})


export class AppSideRegisterComponent {
  form: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      role: new FormControl('user'), // Default role as 'user'
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      this.userService.registerUser(this.form.value).subscribe(
        (response) => {
          console.log('User registered successfully', response);
          this.router.navigate(['/authentication/side-login']); // Redirect to login page after successful registration
        },
        (error) => {
          console.error('Registration error:', error);
        }
      );
    }
  }
}

///authentication/side-register