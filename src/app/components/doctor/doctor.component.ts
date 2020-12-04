import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  providers: [DatePipe]
})
export class DoctorComponent implements OnInit {
  currentdate = new Date()
  generateCode = false;
  qrdata: string = null;

  constructor(private cookieService: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.cookieService.get("web_user_role") != 'doctor') {
      this.router.navigate(['/**'])
    }
  }

  generateQrCode() {
    this.generateCode = true;
    this.qrdata = "id:'" + this.cookieService.get("web_user_id") + ", date: '" + this.currentdate +"'";
  }
}
