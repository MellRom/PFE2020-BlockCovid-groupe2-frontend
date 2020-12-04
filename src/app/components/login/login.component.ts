import { Component, OnInit } from '@angular/core';
import { IWebUser } from 'src/app/models/webUser';
import { ApiService } from 'src/app/services/api/api.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  connected = false;

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

    if (this.loginForm.invalid) {
      return;
    }

    this.apiService.login(this.f.username.value, this.f.password.value)
    .subscribe(
      data => {
        window.location.reload();
        console.log(data);
        this.cookieService.set("web_user_id",data.user_id);
        this.cookieService.set("web_user_role",data.role);
        console.log(this.cookieService.get("web_user_id"));
        console.log(this.cookieService.get("web_user_role"));
        this.connected = true;
        if(data.role==='doctor'){
          this.router.navigate(['/doctor'])
        }
        if(data.role === 'establishment'){
          this.router.navigate(['/establishment'])
        }
      },
      error => {        
        console.log(error);        
        this.f.clear;
      }
    )
  }
}

