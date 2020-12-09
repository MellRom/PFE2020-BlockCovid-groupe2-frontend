import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlockCovid';
  connected: boolean = false;
  username: string = null;
  is_doctor: boolean = false;
  constructor(
    private cookieService: CookieService,
    private router: Router) {}

  ngOnInit(): void {

    if (environment.decryptData(this.cookieService.get("web_user_id")) == '') {
      this.connected = false;
      
    } else {
      this.connected = true;
      this.username = environment.decryptData(this.cookieService.get("web_user_username"));
      if (environment.decryptData(this.cookieService.get("web_user_role")) == "doctor") {
        this.is_doctor = true
      }
    }
  }

  deconnexion() {
    this.cookieService.deleteAll();
    this.username = null;
    this.connected = false;
    this.router.navigate([''])
  }
}
