import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {
  @Input() generatePdf: (name: string, decription: string) => void;
  addPlaceForm: FormGroup;
  submitted: boolean = false;
  qrdata: string = null;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private cookieService: CookieService,) {
  }

  ngOnInit(): void {
    this.addPlaceForm = this.formBuilder.group({
      placeName: ['', Validators.required],
      placeDescription: ['', Validators.required]
    });
  }

  get f() { return this.addPlaceForm.controls; }

  onSubmitPlace(): void {
    this.submitted = true;

    if (this.addPlaceForm.invalid) {
      return;
    }

    this.apiService.addPlace(this.f.placeName.value, this.f.placeDescription.value, this.cookieService.get("web_user_id"))
      .subscribe(
        data => {
          this.qrdata = "'name': " + this.f.placeName.value + ", 'description': " + this.f.placeDescription.value + ", 'id_establishment': " + this.cookieService.get("web_user_id");
          console.log(this.f.placeName.value);
          
          this.generatePdf(this.f.placeName.value, this.f.placeDescription.value);

        },
        error => {
          console.log(error);
          this.f.clear;
        }
      )
  }
}
