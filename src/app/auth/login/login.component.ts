import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  appEmailDomains = appEmailDomains;
  @ViewChild(
    // 'form',
    NgForm,
    { static: true }
  )
  form!: ElementRef<HTMLInputElement>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.authService.user = {
      username: 'John',
    } as any;
    const returnUrl =
      this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    this.router.navigate([returnUrl]);
  }
}
