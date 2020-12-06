import { Component, OnInit } from '@angular/core';
import { IWebUser } from 'src/app/models/webUser';
import { ApiService } from 'src/app/services/api/api.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  isConnected: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }
  
  onSubmit() {
    this.submitted = true;
    this.isConnected = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.apiService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          this.cookieService.set("web_user_id", data.user_id, { expires: 1, sameSite: 'Lax' });
          this.cookieService.set("web_user_role", data.role, { expires: 1, sameSite: 'Lax' });
          this.cookieService.set("web_user_username", this.f.username.value, { expires: 1, sameSite: 'Lax' });     

          if (data.role === 'doctor') {
            window.location.href = '/doctor'
          }
          if (data.role === 'establishment') {
            window.location.href = '/establishment'
          }
        },
        error => {
          this.isConnected = false;
          console.log(error);
          this.f.clear;
        }
      )
  }
}

