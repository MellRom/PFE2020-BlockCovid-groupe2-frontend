import { DatePipe, formatDate, getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  pipe = new DatePipe('en-US');
  currentDate = this.pipe.transform(Date.now(), 'dd/MM/y HH:mm:ss');
  generateCode = false;
  qrdata: string = null;

  constructor(private cookieService: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.cookieService.get("web_user_role") != 'doctor') {
      this.router.navigate(['**'])
    }
  }

  generateQrCode() {
    this.generateCode = true;
    console.log(this.currentDate);
    
    this.qrdata = "statut: 'covid', id:'" + this.cookieService.get("web_user_id") + ", date: '" + this.currentDate +"'";
  }
}
