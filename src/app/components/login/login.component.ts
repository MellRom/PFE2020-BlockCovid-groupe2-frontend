import { Component, OnInit } from '@angular/core';
import { IWebUser } from 'src/app/models/webUser';
import { ApiService } from 'src/app/services/api/api.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private apiService: ApiService,
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

    this.apiService.login(this.f.username.value, this.f.password.value)
    .subscribe(
      data => {
        console.log(data);
        
        this.connected = true;
        if(data.role==='doctor'){
          this.router.navigate(['/doctor'])
        }
        if(data.role === 'establishment'){
          console.log("ça marche");
          console.log(data.user_id);
          data.id
          //this.router.navigate(['/establishment'])
        }
      },
      error => {        
        console.log(error);        
        this.f.clear;
      }
    )
  }
}

