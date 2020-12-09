import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
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
          this.cookieService.set("web_user_id", environment.encryptData(data.user_id), { expires: 1, sameSite: 'Lax' });
          this.cookieService.set("web_user_role", environment.encryptData(data.role), { expires: 1, sameSite: 'Lax' });
          this.cookieService.set("web_user_username", environment.encryptData(this.f.username.value), { expires: 1, sameSite: 'Lax' });     

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

