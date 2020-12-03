import { Component, OnInit } from '@angular/core';
import { IWebUser } from 'src/app/models/webUser';
import { ApiService } from 'src/app/services/login/api.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  modelWebUser: IWebUser = {
    id: '',
    name: '',
    login: '',
    password: ''
  };

  inscriptionForm: FormGroup;
  submitted = false;
  loading = false;
  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router) { }

    ngOnInit(): void {
      this.inscriptionForm = this.formBuilder.group({
        login: ['', Validators.required],
        name: ['', Validators.required],
        role: ['', Validators.required],
        password: ['', Validators.required],
        adress: ['', Validators.required]
      });
    }

  get f() { return this.inscriptionForm.controls; }

  onSubmit() {
    console.log("on submit");
    this.submitted = true;    
    /*if (this.inscriptionForm.invalid) {
      console.log("invalid");
      return;
    }*/
    let role ='role';
    if(this.f.role.value==='Médecin'){
      role = 'doctor'
    } else {
      role = 'establishment'
    }

    this.loading = true;
    this.apiService.inscription(this.f.login.value, this.f.name.value, role, this.f.password.value, this.f.adress.value)
    .subscribe(
      data => {
        console.log(data);
        if(data.role==='doctor'){
          this.router.navigate(['/doctor'])
        }
      },
      error => {
        this.loading = false;
      }
    )
  }
}
