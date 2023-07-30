import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import {
  appEmailValidator,
  matchPasswordGroupValidator,
} from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    pass: this.fb.group(
      {
        password: [],
        rePassword: [],
      },
      {
        validators: [matchPasswordGroupValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(private fb: FormBuilder) {}
}
