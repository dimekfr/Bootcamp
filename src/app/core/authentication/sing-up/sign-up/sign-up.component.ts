import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    zip: new FormControl(),
    street: new FormControl(),
    neighborhood: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    password: new FormControl(),
    passwordConfirmation: new FormControl(),
    termsAndConditionsAgreement: new FormControl(),
    lgptAgreement: new FormControl(),

  });

  onSubmit() {
    console.warn(this.signUpForm.value);
  }


}
