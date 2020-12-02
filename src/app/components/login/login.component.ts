import { Component, OnInit } from '@angular/core';
import { IWebUser } from 'src/app/models/webUser';
import { LoginService } from 'src/app/services/login/login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.f);
    
    console.log(this.f.username.value);
    console.log(typeof(this.f.username.value));
    
    if (this.loginForm.invalid) {
      return;
    }
  }
}

