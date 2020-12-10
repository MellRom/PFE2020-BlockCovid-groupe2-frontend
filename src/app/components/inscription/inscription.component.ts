import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


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

  onSubmit(): void {
    this.submitted = true;
    /*if (this.inscriptionForm.invalid) {
      console.log("invalid");
      return;
    }*/
    let role = 'role';
    if (this.f.role.value === 'Médecin') {
      role = 'doctor'
    } else {
      role = 'establishment'
    }

    this.loading = true;
    this.apiService.inscription(this.f.login.value, this.f.name.value, role, this.f.password.value, this.f.adress.value)
      .subscribe(
        data => {
          this.router.navigate(['']);

        },
        error => {
          this.loading = false;
        }
      )
  }
}
