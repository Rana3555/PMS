import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFrom: any = FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginFrom = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

  get f() {
    return this.loginFrom.controls;
  }

  onLogin() {
    this.submitted = true;
    if (this.loginFrom.invalid) {
      return;
    }
    if (this.loginFrom.valid) {
      this.router.navigate(['/workflow']);
    }
  }

}
