import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ajout-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {
  addPlaceForm: FormGroup;
  submitted = false;
  qrdata: string = null;
  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.addPlaceForm = this.formBuilder.group({
      placeName: ['', Validators.required],
      placeDescription: ['', Validators.required]
    });
  }

  get f() { return this.addPlaceForm.controls; }

  onSubmitPlace() {
    this.submitted = true;

    if (this.addPlaceForm.invalid) {
      return;
    }
    this.apiService.addPlace(this.f.placeName.value, this.f.placeDescription.value, 1)
      .subscribe(
        data => {
          console.log("OKKKKK")
          this.genereateQrCode();
        },
        error => {
          console.log(error);
          this.f.clear;
        }
      )
  }

  genereateQrCode(): void {
    this.qrdata = "'name': " + this.f.placeName.value + ", 'description': " + this.f.placeDescription.value + ", 'id_establishment': 1";
  }
}
