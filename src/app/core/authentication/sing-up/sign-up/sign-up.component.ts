import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email:['', Validators.required],
    phone: [''],
    address : this.fb.group({
      zip: [''],
      street: [''],
      number:[''],
      neighborhood: [''],
      city: [''],
      state: [''],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    }) 
  });

  constructor(private fb: FormBuilder){ };

  onSubmit() {
    console.warn(this.signUpForm.value);
  }


}
