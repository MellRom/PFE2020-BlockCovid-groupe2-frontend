import { Component, OnInit } from '@angular/core';
import { IWebUser } from 'src/app/models/webUser';
import { LoginService } from 'src/app/services/login/login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Router, RouterLink } from '@angular/router';

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
    private loginService: LoginService,
    private router: Router) { }

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

    this.loginService.login(this.f.username.value, this.f.password.value)
    .subscribe(
      data => {
        this.connected = true;
        if(data.role==='doctor'){
          this.router.navigate(['/doctor'])
        }
      },
      error => {
        this.f.clear;
      }
    )
  }
}

