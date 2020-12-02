import { Component, OnInit } from '@angular/core';
import { IWebUser } from 'src/app/models/webUser';
import { LoginService } from 'src/app/services/login/login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';

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
    private alertService: AlertService,
    private loginService: LoginService) { }

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

    this.loading = true;
    this.loginService.inscription(this.f.login.value, this.f.name.value, this.f.role.value, this.f.password.value, this.f.adress.value)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    )
  }
}
