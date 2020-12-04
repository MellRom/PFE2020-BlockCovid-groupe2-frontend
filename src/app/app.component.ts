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
  connected = false;
  constructor(
    private cookieService: CookieService,
    private router: Router) {
   }
   
   ngOnInit(): void {
    if(this.cookieService.get("web_user_id")==null){
      this.connected = false;
    } else {
      this.connected = true;
    }
  }

   deconnexion(){
     this.cookieService.deleteAll();
     this.router.navigate(['/**'])
     this.connected = false;
   }
}
