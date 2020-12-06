import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlockCovid';
  connected: boolean = false;
  username: string = null;
  is_doctor: boolean;
  constructor(
    private cookieService: CookieService,
    private router: Router) {}

  ngOnInit(): void {
    console.log(this.cookieService.getAll());
    console.log(this.connected);
    console.log(this.username);
    console.log(this.is_doctor);
    

    if (this.cookieService.get("web_user_id") == null) {
      this.connected = false;
      
    } else {
      this.connected = true;
      this.username = this.cookieService.get("web_user_username");
      if (this.cookieService.get("web_user_role") == "doctor") {
        this.is_doctor = true
      }
    }
  }

  deconnexion() {
    this.cookieService.deleteAll();
    this.username = null;
    this.connected = false;
    this.router.navigate(['/login'])
  }
}
