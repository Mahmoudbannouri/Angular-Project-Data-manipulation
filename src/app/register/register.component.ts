import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    pwd: new FormControl('', Validators.required),
  });

  onSubmit() {
    return console.log(this.registerForm.value);
  }
}
