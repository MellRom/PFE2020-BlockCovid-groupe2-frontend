import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private cookieService: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.cookieService.get("web_user_role")!='doctor'){
      this.router.navigate(['/**'])
    }
  }

}
